import Profile from "./Profile";

function App() {
  const users = [
    {
      name: "Leanne Graham",
      role: "Developer",
      avatarUrl: "./Materials/Screenshot 2025-05-11 030830.png",
    },
    {
      name: "Chelsey Dietrich",
      role: "Team Lead",
      avatarUrl: "./Materials/Screenshot 2025-05-26 092539.png",
    },
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      <div className="profile-list">
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
