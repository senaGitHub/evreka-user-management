import styled from "styled-components";
import { Link } from "react-router-dom";

// Wrapper for the entire page
export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

// Section title
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

// Wrapper for search input and view toggle
export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

// Search input style
export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  max-width: 400px;
`;

// Toggle view buttons (Card / Table)
export const ToggleGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ToggleButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.white)};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.text)};
  cursor: pointer;
  transition: 0.2s;
`;

// Add user and Show All button row
export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

// + Add User button
export const AddButton = styled.button`
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Card View list wrapper
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`;

// Each user card
export const CardItem = styled.li`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

// Link wrapper for user details
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

// User name in card
export const UserName = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
`;

// Email text
export const UserEmail = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.secondary};
`;

// Role and date metadata
export const UserMeta = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 0.25rem;
`;

// Table view
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

// Pagination layout
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 0.8rem;
  margin: 0 0.2rem;
  font-size: ${({ theme }) => theme.fontSizes.small};

  background-color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.border)};

  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.text)};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
`;
