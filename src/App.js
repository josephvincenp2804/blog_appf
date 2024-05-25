import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Apilist from './components/Apilist';
import Add from './components/Add';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      
       <Route path='/' element={<Apilist/>}/>
       <Route path='/add' element={<Add/>}/>
       <Route/>
      
    </Routes>
   

    </div>
  );
}

export default App;
