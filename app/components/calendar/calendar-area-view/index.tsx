"use client";

import CalendarWeekView from "../calendar-week-view";

function CalendarAreaView() {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <CalendarWeekView />
    </div>
  );
}

export default CalendarAreaView;
