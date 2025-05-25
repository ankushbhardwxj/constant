import { Instance, types } from "mobx-state-tree";

export const Event = types.model("Event", {
  title: types.string,
  description: types.string,
  startDate: types.Date,
  endDate: types.Date,
  completed: types.optional(types.boolean, false),
  isBacklog: types.optional(types.boolean, true),
});

export type TEvent = Instance<typeof Event>;
