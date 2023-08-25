import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topbox/TopBox";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="box">
        <TopBox />
      </div>
      <div className="box"><ChartBox/></div>
      <div className="box"><ChartBox/></div>
      <div className="box"><ChartBox/></div>
      <div className="box"><ChartBox/></div>
      <div className="box"></div>
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
    </div>
  );
}
