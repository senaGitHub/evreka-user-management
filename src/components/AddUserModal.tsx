import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import * as S from "../styles/AddUserModal.styled";

type Props = {
  onClose: () => void;
};

// Utility for generating random geo-coordinates
const getRandomCoordinate = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const AddUserModal = ({ onClose }: Props) => {
  // Local states for input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [isActive, setIsActive] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  // Simple validation before submit
  const validateForm = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill out all required fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Dispatch new user
    dispatch(
      addUser({
        id: Date.now().toString(),
        name,
        email,
        password,
        role,
        isActive,
        createdAt: new Date().toISOString(),
        latitude: getRandomCoordinate(36, 42),
        longitude: getRandomCoordinate(26, 45),
      })
    );

    // Reset form
    setName("");
    setEmail("");
    setPassword("");
    setRole("User");
    setIsActive(true);
    setError("");

    // Close modal
    onClose();
  };

  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <S.Title>Add New User</S.Title>
          <S.CloseButton onClick={onClose}>×</S.CloseButton>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          <S.Label>Name *</S.Label>
          <S.Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Sena Gulubol Cirakoglu" />

          <S.Label>Email *</S.Label>
          <S.Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="gulubols@gmail.com" />

          <S.Label>Password *</S.Label>
          <S.Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />

          <S.Label>Role</S.Label>
          <S.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </S.Select>

          <S.CheckboxWrapper>
            <S.Checkbox type="checkbox" checked={isActive} onChange={() => setIsActive((prev) => !prev)} />
            <S.Label>Active</S.Label>
          </S.CheckboxWrapper>

          {error && <S.Error>{error}</S.Error>}

          <S.SubmitButton type="submit">Submit</S.SubmitButton>
        </S.Form>
      </S.Modal>
    </S.Overlay>
  );
};

export default AddUserModal;
