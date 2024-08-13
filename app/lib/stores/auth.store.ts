"use client";
import { Instance } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { User } from "../models/user.model";

type userInstance = Instance<typeof User>;

export const UserStoreContext = createContext<null | userInstance>(null);

export const UserStoreProvider = UserStoreContext.Provider;

export function useUser() {
  const store = useContext(UserStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null");
  }
  return store;
}
