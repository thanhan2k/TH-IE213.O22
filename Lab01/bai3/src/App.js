
import './App.css';
import Element from './components/Elenment';

const list=[
  {
    key: 'nhatrang',
    title:'Biển Nha Trang',
    link:require('./img/nhatrang.jpg')
  },
  {
    key: 'dalat',
    title:'Thành Phố Đà Lạt',
    link:require('./img/dalat.jpg')
  },
  {
    key: 'vungtau',
    title:'Biển Vũng Tàu',
    link:require('./img/vungtau.jpg')
  },
  {
    key: 'halong',
    title:'Vịnh Hạ Long',
    link:require('./img/halong.jpg')
  },
  {
    key: 'phanthiet',
    title:'Biển Phan Thiết',
    link:require('./img/phanthiet.jpg')
  },
  {
    key: 'hatien',
    title:'Biển Hà Tiên',
    link:require('./img/hatien.jpg')
  },
  {
    key: 'phuquoc',
    title:'Đảo Phú Quốc',
    link:require('./img/phuquoc.jpg')
  },
]
function App() {
 
  return (
    <div className="App">
      <h1>DANH LAM THẮNG CẢNH</h1>
      <div class='container'>
        <div class='sights-box'>
          {list.map(({title,key})=>{
            let kkey='#'+key
            return(
              <a href={kkey}>{title}</a>
            )
          })}
        </div>
        <div class='panel'>
          {list.map(({key,title,link})=>{
            return(
              <div class='img-box'>
                <Element title={title} img={link} kkey={key}/>
              </div>
            )
          })}
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
