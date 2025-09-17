import Profile from "./components/Profile";

function App() {
  const users = [
    {
      name: "Leanne Graham",
      role: "Developer",
      avatarUrl: "https://thumbs.dreamstime.com/b/business-woman-avatar-illustration-simple-cartoon-user-portrait-leader-profile-icon-vector-277139072.jpg",
    },
    {
      name: "Chelsey Dietrich",
      role: "Team Lead",
      avatarUrl: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
  ];

  return (
    <main className="app">
      <h1 className="title"> User Profiles</h1>

      <section className="profile-list">
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
