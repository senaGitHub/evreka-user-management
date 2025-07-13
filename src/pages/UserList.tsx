import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import * as S from "../styles/UserList.styled";
import AddUserModal from "../components/AddUserModal";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

//Functional component to display the list of users

function UserList() {
  //Get users from redux state
  const users = useSelector((state: RootState) => state.user.users);
  console.log("usersListConsole:", users);

  //State variables
  const [viewMode, setViewMode] = useState<"card" | "table">("card");
  const [searchParams, setSearchParams] = useSearchParams();
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const searchTerm = searchParams.get("q") || "";
  const itemsPerPage = 10;

  const location = useLocation();
  const navigate = useNavigate();

  //Filtered users based on search input by name or email(case-insensitive)
  const filteredUsers = users.filter((user) => `${user.name} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase()));

  //Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  //Decide which users to render
  const visibleUsers = showAll ? filteredUsers : paginatedUsers;

  //Scroll to top when changing page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const isModalOpen = location.pathname === "/add-user";

  return (
    <S.Container>
      <S.Title>User List</S.Title>
      {/* Search Input and view toggle buttons */}
      <S.Controls>
        <S.SearchInput
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => {
            setSearchParams({ q: e.target.value });
            setCurrentPage(1); //Reset page on search
          }}
        />
        <S.ToggleGroup>
          <S.ToggleButton active={viewMode === "card"} onClick={() => setViewMode("card")}>
            Card View
          </S.ToggleButton>
          <S.ToggleButton active={viewMode === "table"} onClick={() => setViewMode("table")}>
            Table View
          </S.ToggleButton>
        </S.ToggleGroup>
      </S.Controls>

      {/* Add user and pagination toggle */}

      <S.ActionRow>
        <S.AddButton onClick={() => navigate("/add-user")}>+ Add User</S.AddButton>
        <S.ToggleButton
          active={showAll}
          onClick={() => {
            setShowAll(!showAll);
            setCurrentPage(1);
          }}
        >
          {showAll ? "Paginated View" : "Show All"}
        </S.ToggleButton>
      </S.ActionRow>

      {/* Conditional rendering based on view mode - card or table */}
      {viewMode === "card" ? (
        <S.List>
          {visibleUsers.map((user) => (
            <S.CardItem key={user.id}>
              <S.StyledLink to={`/users/${user.id}`}>
                <S.UserName>{user.name}</S.UserName>
                <S.UserEmail>{user.email}</S.UserEmail>
                <S.UserMeta>Role: {user.role}</S.UserMeta>
                <S.UserMeta>Created: {new Date(user.createdAt).toLocaleDateString()}</S.UserMeta>
              </S.StyledLink>
            </S.CardItem>
          ))}
        </S.List>
      ) : (
        <S.Table>
          <thead>
            <tr>
              <S.Th>Name</S.Th>
              <S.Th>Email</S.Th>
              <S.Th>Role</S.Th>
              <S.Th>Creation Date</S.Th>
              <S.Th>Actions</S.Th>
            </tr>
          </thead>
          <tbody>
            {visibleUsers.map((user) => (
              <tr key={user.id}>
                <S.Td>{user.name}</S.Td>
                <S.Td>{user.email}</S.Td>
                <S.Td>{user.role}</S.Td>
                <S.Td>{new Date(user.createdAt).toLocaleDateString()}</S.Td>
                <S.Td>
                  <S.StyledLink to={`/users/${user.id}`}>Details</S.StyledLink>
                </S.Td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      )}

      {/* Pagination Controls */}
      {!showAll && totalPages > 1 && (
        <S.Pagination>
          {/* First Page */}
          <S.PageButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            ⏮ First
          </S.PageButton>

          {/* Previous */}
          <S.PageButton onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
            ← Prev
          </S.PageButton>

          {/* Smart page numbers: show only relevant pages */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) =>
                page === 1 || // always show first page
                page === totalPages || // always show last page
                Math.abs(page - currentPage) <= 2 // show ±2 pages around current
            )
            .map((page, index, arr) => {
              const prev = arr[index - 1];
              const shouldShowEllipsis = prev && page - prev > 1;

              return (
                <React.Fragment key={page}>
                  {shouldShowEllipsis && <span style={{ padding: "0 0.5rem" }}>...</span>}
                  <S.PageButton onClick={() => setCurrentPage(page)} active={currentPage === page}>
                    {page}
                  </S.PageButton>
                </React.Fragment>
              );
            })}

          {/* Next */}
          <S.PageButton onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
            Next →
          </S.PageButton>

          {/* Last Page */}
          <S.PageButton onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
            ⏭ Last
          </S.PageButton>
        </S.Pagination>
      )}

      {/*Add User Modal*/}
      {isModalOpen && <AddUserModal onClose={() => navigate("/")} />}
    </S.Container>
  );
}

export default UserList;
