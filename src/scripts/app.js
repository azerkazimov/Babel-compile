import { printProfile } from "./profile.js";

const userData = {
  name: "Tom",
  age: 17,
};

const profile = {
  ...userData,
  company: "Google",
};

printProfile(profile);
