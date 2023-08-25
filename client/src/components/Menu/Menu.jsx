import "./menu.scss";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <div className="item">
        <span>MAIN</span>
        <Link to={"/"}>
          <img src="/home.png" alt="" />
          <span>Home</span>
        </Link>
        <Link to={"/"}>
          <img src="/profile.png" alt="" />
          <span>Profile</span>
        </Link>
      </div>
      <div className="item">
        <span>LIST</span>
        <Link to={"/"}>
          <img src="/users.png" alt="" />
          <span>Users</span>
        </Link>
        <Link to={"/"}>
          <img src="/products.png" alt="" />
          <span>Products</span>
        </Link>
        <Link to={"/"}>
          <img src="/orders.png" alt="" />
          <span>Orders</span>
        </Link>
        <Link to={"/"}>
          <img src="/posts.png" alt="" />
          <span>Posts</span>
        </Link>
      </div>
    </div>
  );
}
