import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayHome from './components/DisplayHome';
import AddLanguage from './components/AddLanguage';
import EditLanguage from './components/EditLanguage';
import DisplayLanguage from './components/DisplayLanguage';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element ={<DisplayHome/>}/>
            <Route path='/addNewLanguage' element={<AddLanguage/>}/>
            <Route path='/oneLanguage/:id' element={<DisplayLanguage/>}/>
            <Route path='/updateLanguage/:id' element={<EditLanguage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
