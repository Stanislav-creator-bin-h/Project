interface ProfileProps {
  name: string;
  role: string;
  avatarUrl: string;
}

function Profile({ name, role, avatarUrl }: ProfileProps) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default Profile;