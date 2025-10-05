import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "../components/Navbar";
import "./Promote.css";

export default function Promote() {
  return (
    <div>
        <Navbar></Navbar>
        <h1>Promomte Page</h1>
    </div>
  );
}