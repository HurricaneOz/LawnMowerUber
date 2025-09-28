import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "../components/Navbar";
import "./Hire.css";

export default function Hire() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("providers") || "[]");
    setProviders(stored);
  }, []);

  // Handle client clicking a provider's slot
  const handleEventClick = (providerIndex, clickInfo) => {
    const provider = providers[providerIndex];
    if (
      window.confirm(
        `Hire ${provider.service_id} at ${new Date(
          clickInfo.event.start
        ).toLocaleString()} - ${new Date(clickInfo.event.end).toLocaleString()}?`
      )
    ) {
      alert(`You hired ${provider.service_id}!`);
      // Optional: remove the slot from availability locally
      const updatedProviders = [...providers];
      updatedProviders[providerIndex].availability = updatedProviders[
        providerIndex
      ].availability.filter((slot) => slot.id !== clickInfo.event.id);
      setProviders(updatedProviders);
      localStorage.setItem("providers", JSON.stringify(updatedProviders));
    }
  };

  return (
    <div>
      <Navbar />
      {providers.length === 0 ? (
        <p>No providers yet. Ask providers to promote their services!</p>
      ) : (
        <div className="provider-list-calendar">
          {providers.map((provider, index) => (
            <div key={index} className="provider-card-calendar">
              <h3>{provider.service_id}</h3>
              <p>Rate: ${provider.rate}/hr</p>
              <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={false}
                allDaySlot={false}
                selectable={false}
                events={provider.availability}
                eventClick={(info) => handleEventClick(index, info)}
                height={250}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
