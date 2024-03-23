import "./App.css";
import imgs from "./img";
import Element from "./components/Elenment";

const list = [
  {
    key: "nhatrang",
    title: "Bi?n Nha Trang",
    link: require("./img/nhatrang.jpg"),
  },
  {
    key: "dalat",
    title: "Thành Ph? Ðà L?t",
    link: require("./img/dalat.jpg"),
  },
  {
    key: "vungtau",
    title: "Bi?n V?ng Tàu",
    link: require("./img/vungtau.jpg"),
  },
  {
    key: "halong",
    title: "V?nh H? Long",
    link: require("./img/halong.jpg"),
  },
  {
    key: "phanthiet",
    title: "Bi?n Phan Thi?t",
    link: require("./img/phanthiet.jpg"),
  },
  {
    key: "hatien",
    title: "Bi?n Hà Tiên",
    link: require("./img/hatien.jpg"),
  },
  {
    key: "phuquoc",
    title: "Ð?o Phú Qu?c",
    link: require("./img/phuquoc.jpg"),
  },
];
function App() {
  return (
    <div className="App">
      <h1>DANH LAM TH?NG C?NH</h1>
      <div class="container">
        <div class="sights-box">
          {list.map(({ title, key }) => {
            let kkey = "#" + key;
            return <a href={kkey}>{title}</a>;
          })}
        </div>
        <div class="panel">
          {list.map(({ key, title, link }) => {
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
