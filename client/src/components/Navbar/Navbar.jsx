import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/admin.png" alt="" />
        <span>Admin</span>
      </div>
      <div className="icons">
        <img src="/search.png" alt="" />
        <img src="/app.png" alt="" />
        <img src="/expand.png" alt="" />
        <div className="notification">
          <img src="/notification.png" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="chrome://branding/content/about-logo.png" alt="" />
          <span>User 1</span>
        </div>
        <img src="/settings.png" alt="" />
      </div>
    </div>
  );
}
