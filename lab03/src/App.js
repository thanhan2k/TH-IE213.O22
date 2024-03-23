// import logo from "./logo.svg";
import Element from "./components/Element";
import "./App.css";
import imgs from "./img";

const landmarks = [
  {
    key: "nhatrang",
    title: "Biển Nha Trang",
    link: imgs.nhatrang,
  },
  {
    key: "dalat",
    title: "Thành Phố Đà Lạt",
    link: imgs.dalat,
  },
  {
    key: "vungtau",
    title: "Biển Vũng Tàu",
    link: imgs.vungtau,
  },
  {
    key: "halong",
    title: "Vịnh Hạ Long",
    link: imgs.halong,
  },
  {
    key: "phanthiet",
    title: "Biển Phan Thiết",
    link: imgs.phanthiet,
  },
  {
    key: "hatien",
    title: "Biển Hà Tiên",
    link: imgs.hatien,
  },
  {
    key: "phuquoc",
    title: "Đảo Phú Quốc",
    link: imgs.phuquoc,
  },
];
function App() {
  return (
    <div className="App">
      <h1 className="Header">DANH LAM THẮNG CẢNH</h1>
      <div class="container">
        <div class="sights-box">
          {landmarks.map(({ title, key }) => {
            let kkey = "#" + key;
            return <a href={kkey}>{title}</a>;
          })}
        </div>
        <div class="panel">
          {landmarks.map(({ key, title, link }) => {
            return (
              <div class="img-box">
                <Element title={title} img={link} kkey={key} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
