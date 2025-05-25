import { useAppStore } from "@/lib/stores/app.store";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useRef } from "react";
import CalendarEvent from "../calendar-event";

function CalendarWeekView() {
  const { generateWeekDays, getEventsForTimeSlot } = useAppStore();
  const gridRef = useRef<HTMLDivElement>(null);
  const weekDays = generateWeekDays();
  const today = new Date();
  const timeSlots = Array.from({ length: 24 }, (_, i) => i);

  function renderDayHeader(day: Date, index: number) {
    const isToday =
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear();
    const dayName = format(day, "EEE");
    const dayDate = day.getDate();
    return (
      <div
        key={index}
        className={cn(
          "py-2 text-center border-r flex flex-col items-center justify-center",
          isToday ? "bg-accent/30" : ""
        )}
      >
        <div className="text-xs font-medium text-muted-foreground">
          {dayName}
        </div>
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium mt-1",
            isToday ? "bg-primary text-primary-foreground" : ""
          )}
        >
          {dayDate}
        </div>
      </div>
    );
  }

  function getCurrentTimePosition(): number {
    const hourHeight = 48;
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return hourHeight * hours + (hourHeight * minutes) / 60;
  }

  function renderCurrentTimeIndicator(isToday: boolean) {
    if (!isToday) return null;
    const top = getCurrentTimePosition();
    return (
      <div
        className="absolute left-0 right-0 z-20 pointer-events-none"
        style={{ top: `${top}px` }}
      >
        <div className="relative">
          <div className="absolute left-0 w-2 h-2 rounded-full bg-red-500 transform -translate-y-1/2 -translate-x-1/2"></div>
          <div className="border-t border-red-500 w-full"></div>
        </div>
      </div>
    );
  }

  function renderDayColumn(day: Date, dayIndex: number) {
    const isToday =
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear();
    return (
      <div
        key={dayIndex}
        className={cn("relative border-r", isToday ? "bg-accent/20" : "")}
      >
        {timeSlots.map((hour) => {
          const isCurrentHour = new Date().getHours() === hour && isToday;
          const eventsInTimeSlot = getEventsForTimeSlot(day, hour);
          return (
            <div
              key={hour}
              className={cn(
                "border-b",
                isCurrentHour ? "bg-accent/40" : "",
                "cursor-pointer",
                "transition-colors duration-200 hover:bg-accent/10",
                "h-12"
              )}
            >
              {eventsInTimeSlot.map((event, i) => (
                <CalendarEvent key={i} event={event} />
              ))}
            </div>
          );
        })}
        {renderCurrentTimeIndicator(isToday)}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-x-auto overflow-y-auto h-full relative">
        <div className="h-full flex flex-col">
          <div className="sticky top-0 z-10 bg-background shadow-sm border-b mt-2">
            <div
              className="grid"
              style={{
                gridTemplateColumns: `70px repeat(${weekDays.length}, 1fr)`,
              }}
            >
              <div className="border-r py-4 pl-4 text-center text-xs">
                GMT-04
              </div>
              {weekDays.map((day, i) => renderDayHeader(day, i))}
            </div>
          </div>
          <div className="flex-1 min-w-full" ref={gridRef}>
            <div
              className="grid h-full"
              style={{
                gridTemplateColumns: `70px repeat(${weekDays.length}, 1fr)`,
              }}
            >
              <div className="border-r">
                {timeSlots.map((hour) => (
                  <div
                    key={hour}
                    className={cn(
                      "border-b pr-2 text-right text-xs text-muted-foreground",
                      "h-12"
                    )}
                  >
                    {hour === 0
                      ? ""
                      : `${hour % 12 === 0 ? 12 : hour % 12}${
                          hour < 12 ? "AM" : "PM"
                        }`}
                  </div>
                ))}
              </div>
              {weekDays.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={cn("relative border-r", "bg-accent/20")}
                >
                  {renderDayColumn(day, dayIndex)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarWeekView;
