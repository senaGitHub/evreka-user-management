import styled from "styled-components";

// Container for the entire detail page
export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`;

// Page title
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

// Label for each field (Name, Email, etc.)
export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1rem;
`;

// Value displayed under each label
export const Value = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.5rem;
`;

// Wrapper for Leaflet map
export const MapWrapper = styled.div`
  margin-top: 2rem;
  height: 300px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;
