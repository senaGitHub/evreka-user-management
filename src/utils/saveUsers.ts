import type { User } from "../store/userSlice";

// Save user list to localStorage
export const saveUsers = (users: User[]) => {
  try {
    localStorage.setItem("users", JSON.stringify(users));
  } catch (error) {
    console.error("Error saving users to localStorage:", error);
  }
};
