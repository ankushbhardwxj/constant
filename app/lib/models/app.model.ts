import { Instance, types } from "mobx-state-tree";
import { Event, TEvent } from "./event.model";

export type CalendarView = "day" | "week" | "month";
export const AppStore = types
  .model("App", {
    currentDate: types.optional(types.Date, new Date()),
    theme: types.optional(types.string, "light"),
    calendarView: types.optional(
      types.enumeration("CalendarView", ["day", "week", "month"]),
      "week"
    ),
    backlogItems: types.array(types.string),
    events: types.array(Event),
  })
  .actions((self) => ({
    init() {
      (self.currentDate = new Date()), (self.theme = "light");
      const event = Event.create({
        title: "task 1",
        description: "task 1 description",
        startDate: new Date(),
        endDate: new Date(),
        completed: false,
        isBacklog: true,
      });
      self.events.push(event);
    },
    toggleTheme() {
      self.theme = self.theme === "dark" ? "light" : "dark";
    },
    generateWeekDays() {
      const daysToShow = 7;
      return Array.from({ length: daysToShow }, (_, i) => {
        const date = new Date(self.currentDate);
        date.setDate(date.getDate() - date.getDay() + i);
        return date;
      });
    },
    getEventsForTimeSlot(day: Date, hour: number): TEvent[] {
      return self.events.filter((event) => {
        if (!event.startDate || !event.endDate) return false;
        return (
          event.startDate.getDate() === day.getDate() &&
          event.startDate.getMonth() === day.getMonth() &&
          event.startDate.getFullYear() === day.getFullYear() &&
          event.startDate.getHours() <= hour &&
          event.endDate.getHours() > hour
        );
      });
    },
  }));

export type TAppStore = Instance<typeof AppStore>;
