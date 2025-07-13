import { faker } from "@faker-js/faker";
import type { User } from "../store/userSlice";

// Function to generate N fake users
export const generateUsers = (count: number): User[] => {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    const user: User = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(), // Random password
      role: Math.random() < 0.5 ? "Admin" : "User",
      isActive: Math.random() < 0.8, // 80% active user
      createdAt: faker.date.past().toISOString(),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };

    users.push(user);
  }
  return users;
};
