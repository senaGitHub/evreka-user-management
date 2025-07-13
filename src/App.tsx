// This is the main application component.
import { BrowserRouter, Routes, Route } from "react-router";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import { useEffect } from "react";
import { saveUsers } from "./utils/saveUsers";

function App() {
  //Get users from Redux store
  const users = useSelector((state: RootState) => state.user.users);

  //Save users to LocalStorage on every change
  useEffect(() => {
    saveUsers(users);
  }, [users]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
