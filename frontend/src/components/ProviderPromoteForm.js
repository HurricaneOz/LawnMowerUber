import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./ProviderPromoteForm.css";

export default function ProviderPromoteForm() {
  const [formData, setFormData] = useState({
    service_id: "",
    rate: "",
  });

  const [availability, setAvailability] = useState([]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Add a new availability slot when user selects a range
  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    const newSlot = {
      id: String(availability.length),
      title: "Available",
      start,
      end,
      backgroundColor: "#4caf50",
      borderColor: "#4caf50",
    };
    setAvailability([...availability, newSlot]);
  };

  // Remove a slot when clicked
  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Remove this availability slot from ${clickInfo.event.start.toLocaleString()}?`
      )
    ) {
      setAvailability(availability.filter((ev) => ev.id !== clickInfo.event.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, availability };
    console.log("Submitted provider info:", payload);
    alert("Provider info submitted! Check console for payload.");
    // Reset form
    setFormData({ service_id: "", rate: "" });
    setAvailability([]);
  };

  return (
    <form className="provider-form" onSubmit={handleSubmit}>
      <h2>Promote Your Service</h2>
      <div className="provider-form-container">
        <div className="form-left">
          <label>
            Service:
            <select
              name="service_id"
              value={formData.service_id}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Service --</option>
              <option value="Lawn Care">Lawn Care</option>
              <option value="Snow Removal">Snow Removal</option>
              <option value="Landscaping">Landscaping</option>
            </select>
          </label>

          <label>
            Rate (per hour):
            <input
              type="number"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              step="0.01"
              required
            />
          </label>

          <button type="submit" className="submit-btn">
            Submit Provider Info
          </button>
        </div>

        <div className="calendar-right">
          <h3>Availability (click & drag to select slots)</h3>
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            selectable={true}
            select={handleDateSelect}
            events={availability}
            eventClick={handleEventClick}
            allDaySlot={false}
            height={300} // smaller calendar
            headerToolbar={{
              left: "",
              center: "title",
              right: "prev,next",
            }}
          />
        </div>
      </div>
    </form>
  );
}
