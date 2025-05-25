"use client";

import { createContext, useContext } from "react";
import { Event, TEvent } from "../models/event.model";

export const eventStore = Event.create({
  title: "",
  description: "",
  startDate: new Date(),
  endDate: new Date(),
});

type eventStoreInstance = TEvent;

export const EventStoreContext = createContext<null | eventStoreInstance>(null);
export const EventStoreProvider = EventStoreContext.Provider;

export function useEventStore() {
  const store = useContext(EventStoreContext);
  if (!store) {
    throw new Error("Event store not initialized");
  }
  return store;
}
