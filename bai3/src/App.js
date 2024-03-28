// import './App.css';
import imgs from "./img";
import Element from "./components/Elenment";

const list = [
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
    <div className="flex justify-center items-center ">
      <div className="border-2 border-[#c4d381] w-[800px] mt-[60px]">
        <h1 className="bg-[#535939] text-white font-bold text-2xl text-center py-2">
          DANH LAM THẮNG CẢNH
        </h1>
        <div className="grid grid-cols-2 bg-[#c4d381]">
          <div className="max-h-[260px] bg-white text-xl font-bold m-[8px] px-1">
            <h3 className=" font-extrabold">Danh sách địa danh</h3>
            {list.map(({ title, key }) => {
              let kkey = "#" + key;
              return (
                <a className="text-[#3738bf] underline" href={kkey}>
                  {title} <br />
                </a>
              );
            })}
          </div>
          <div>
            <div className="bg-white ">
              {list.map(({ key, title, link }) => {
                return (
                  <div className="flex justify-center items-center">
                    <Element title={title} img={link} kkey={key} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
