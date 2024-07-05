// svg는 xml 태그이므로 모듈, import로 한다
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg'
import './App.css';

const App = () => {
  return (
    <header id="hd" className=''>
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className='col-4 col-md-2'>
          <a href="" className='d-block'>
            <img src={logo} alt="" className='w-100'/>
          </a>
        </h1>
        <ul id="gnb" className="d-flex">
          <li className='mx-1'><a href="">대메뉴</a></li>
          <li className='mx-1'><a href="">대메뉴</a></li>
          <li className='mx-1'><a href="">대메뉴</a></li>
          <li className='mx-1'><a href="">대메뉴</a></li>
        </ul>
      </div>
    </header>
  );
}

export default App;
