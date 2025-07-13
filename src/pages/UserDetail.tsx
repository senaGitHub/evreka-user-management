import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import * as S from "../styles/UserDetail.styled";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Leaflet default icon fix for Vite + TypeScript
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const UserDetail = () => {
  // Get user ID from route
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.user.users);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return (
      <S.Container>
        <S.Title>User Not Found</S.Title>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>User Details</S.Title>

      {/* Basic Info */}
      <S.Label>Name:</S.Label>
      <S.Value>{user.name}</S.Value>

      <S.Label>Email:</S.Label>
      <S.Value>{user.email}</S.Value>

      <S.Label>Role:</S.Label>
      <S.Value>{user.role}</S.Value>

      <S.Label>Status:</S.Label>
      <S.Value>{user.isActive ? "Active" : "Inactive"}</S.Value>

      <S.Label>Created At:</S.Label>
      <S.Value>{new Date(user.createdAt).toLocaleDateString()}</S.Value>

      {/* Location */}
      <S.Label>Location:</S.Label>
      <S.MapWrapper>
        <MapContainer center={[user.latitude, user.longitude]} zoom={5} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[user.latitude, user.longitude]}>
            <Popup>
              {user.name}'s Location
              <br />({user.latitude.toFixed(2)}, {user.longitude.toFixed(2)})
            </Popup>
          </Marker>
        </MapContainer>
      </S.MapWrapper>
    </S.Container>
  );
};

export default UserDetail;
