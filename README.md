# Evreka Frontend Developer – User Management App

This project is a submission for Evreka’s Frontend Developer Technical Assessment.  
It is a mini CRM-style application where you can view, filter, add, and manage users, designed with a focus on clean code, responsiveness, and a modern UI.

---

## 🚀 Features

- **User List View**
  - Displays 5,000 fake users (generated locally)
  - Switch between Card View and Table View
  - Responsive and mobile-friendly layout

- **Filtering and Search**
  - Search users by name or email
  - Search input synced with URL query parameter (e.g., `?q=john`) ✅

- **Pagination**
  - Paginated view: 10 users per page
  - "Show All" toggle to render all users
  - Smart pagination with First, Last, Prev, Next and active page highlighting ✅
  - Current page scrolls to top automatically

- **Add New User**
  - Modal form with the following fields: Name, Email, Password, Role, Active status
  - Form validation (required fields, email format, min password length)
  - New user is saved to Redux and persisted with LocalStorage
  - Coordinates (latitude & longitude) are randomly generated
  - Modal is managed by React Router via `/add-user` path ✅

- **User Detail Page**
  - Route: `/users/:id`
  - Displays full user details
  - Embedded map using Leaflet (OpenStreetMap)
  - Marker showing user’s randomly assigned location

- **Persistence**
  - Users are saved in LocalStorage and persist after refresh
  - New users are retained even if the page is reloaded

---

## 🧰 Tech Stack

- **React** (with Vite)
- **TypeScript**
- **Redux Toolkit** (for state management)
- **React Router v6**
- **Styled-components** (custom theming & responsive design)
- **Leaflet.js** (map rendering)
- **LocalStorage**

---

## 📦 Installation

```bash
git clone https://github.com/senaGitHub/evreka-user-management.git
cd evreka-user-management
npm install
npm run dev
