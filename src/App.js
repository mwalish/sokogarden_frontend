import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
        <h1>Apex motors</h1>
      </header>
      <nav>
        <Link to='/signin' className='btn bg-dark  text-white p-2 m-3'>SignIn</Link>
        <Link to='/signup' className='btn bg-dark text-white p-2 m-3'>SignUp</Link>
        <Link to='/' className='btn bg-dark text-white p-2 m-3' >GetProducts</Link>
         <Link to='/addproducts' className='btn bg-dark text-white p-2 m-3' >Addproducts</Link>
          
           <Link to='/mpesa' className='btn bg-dark text-white p-2 m-3' ><Mpesa></Mpesa></Link>
        


      </nav>

      <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<GetProducts/>}/>
      <Route path='/addproducts' element={<AddProducts/>}/>
      <Route path='/mpesa' element={<Mpesa/>}/>
      </Routes>


    </div>
      </Router>
  );

}

export default App;
