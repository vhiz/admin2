import { img } from "../../data";
import "./topbox.scss";

export default function TopBox() {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      <div className="list">
        {Array(9)
          .fill(null)
          .map((user, i) => (
            <div className="listItem" key={i}>
              <div className="user">
                <img src={img} alt="" />
                <div className="userText">
                  <span>Vhiz</span>
                  <span>victor@gmail.com</span>
                </div>
              </div>
              <span>$3.99</span>
            </div>
          ))}
      </div>
    </div>
  );
}
