"use client"
import { Instance } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { AppStore } from "../models/app.model";

export const appStore = AppStore.create({});

type appStoreInstance = Instance<typeof AppStore>

export const AppStoreContext = createContext<null | appStoreInstance>(null);

export const AppStoreProvider = AppStoreContext.Provider;

export function useAppStore() {
  const store = useContext(AppStoreContext);
  if (!store) {
    throw new Error("App store not initialised");
  }
  return store;
}