import { flow, Instance, types } from "mobx-state-tree";

export const User = types
  .model("User", {
    refid: types.maybe(types.string),
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    password: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setEmail: (email: string) => (self.email = email),
    setPassword: (password: string) => (self.password = password),
    setFirstName: (firstName: string) => (self.firstName = firstName),
    setLastName: (lastName: string) => (self.lastName = lastName),
  }))
  .actions((self) => ({
    loginUser: flow(function* simpleLogin() {
      console.log(self.email, self.password);
    }),
    signUpWithGoogle: flow(function* signUpWithGoogle() {}),
  }));
export type TUser = Instance<typeof User>;
