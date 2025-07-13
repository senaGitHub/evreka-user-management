import type { User } from "../store/userSlice";
import { generateUsers } from "./generateUsers";

// Load user list from localStorage or fallback to generated data
export const loadUsers = (): User[] => {
  try {
    const stored = localStorage.getItem("users");
    if (stored) {
      return JSON.parse(stored);
    } else {
      // If no data, generate 5000 default users.
      const generated = generateUsers(5000);
      localStorage.setItem("users", JSON.stringify(generated));
      return generated;
    }
  } catch (error) {
    console.error("Error loading users from localStorage:", error);
    return [];
  }
};
