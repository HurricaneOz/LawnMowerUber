import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../UserContext";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Promote from "../pages/Promote";
import Home from "../pages/Home";

// Mock useNavigate so tests won't try to actually navigate
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: () => jest.fn(),
  };
});

// Helper to wrap components in UserProvider + Router
const renderWithProviders = (ui, { initialEntries = ["/"] } = {}) =>
  render(
    <UserProvider>
      <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>
    </UserProvider>
  );

// Optional ProtectedRoute for testing
const ProtectedRoute = ({ children }) => {
  const { currentUser } = React.useContext(require("../UserContext").UserContext);
  return currentUser ? children : <Login />;
};

describe("Full Frontend Auth Flow (React Router v7)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Navbar shows Login link when no user is logged in", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("User can register and then login", () => {
    renderWithProviders(
      <>
        <Navbar />
        <Login />
      </>
    );

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Switch to registration mode
    fireEvent.click(screen.getByText(/create an account/i));

    // Fill registration form
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "1234" } });
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    // Login after registration
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "1234" } });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Navbar should now show ProfileMenu
    expect(screen.queryByText(/login/i)).not.toBeInTheDocument();
    expect(screen.getByText(/signed in as/i)).toBeInTheDocument();
  });

  test("Logout clears context and updates Navbar", () => {
    renderWithProviders(
      <>
        <Navbar />
        <Login />
      </>
    );

    // Register and login
    fireEvent.click(screen.getByText(/create an account/i));
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "user1" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "pass" } });
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "user1" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "pass" } });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Click logout in ProfileMenu
    fireEvent.click(screen.getByText(/logout/i));

    // Navbar should show Login again
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.queryByText(/signed in as/i)).not.toBeInTheDocument();
  });

  test("Protected route redirects to Login if not authenticated", () => {
    renderWithProviders(
      <Routes>
        <Route
          path="/promote"
          element={
            <ProtectedRoute>
              <Promote />
            </ProtectedRoute>
          }
        />
      </Routes>,
      { initialEntries: ["/promote"] }
    );

    // Since no user is logged in, Login form should be visible
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("Protected route shows content if authenticated", () => {
    localStorage.setItem("currentUser", JSON.stringify("testuser"));

    renderWithProviders(
      <Routes>
        <Route
          path="/promote"
          element={
            <ProtectedRoute>
              <Promote />
            </ProtectedRoute>
          }
        />
      </Routes>,
      { initialEntries: ["/promote"] }
    );

    // Promote page content should be visible
    expect(screen.getByText(/signed in as/i)).toBeInTheDocument();
    // Assuming ProviderForm renders some text "Provider Form"
    expect(screen.getByText(/provider form/i, { exact: false })).toBeInTheDocument();
  });
});
