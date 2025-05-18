import { Instance, types } from "mobx-state-tree";

export type CalendarView = "day"|"week"|"month";
export const AppStore = types.model("App", {
  currentDate: types.optional(types.Date, new Date()),
  theme: types.optional(types.string, "light"),
  calendarView: types.optional(types.enumeration("CalendarView", ["day", "week", "month"]), "week"),
  backlogItems: types.array(types.string)
}).actions((self) => ({
  init() {
    self.currentDate = new Date(),
    self.theme = "light"
  },
  toggleTheme() {
    self.theme = self.theme === "dark" ? "light" : "dark"
  },
  
}))

export type TAppStore = Instance<typeof AppStore>;