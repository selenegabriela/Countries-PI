import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import NavBar from './components/NavBar';
import CreateActivity from './components/CreateActivity';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />}/>
          <Route path='/home' element={(<> <NavBar /><Home /> </>)}/>
          <Route path='/activity' element={(<> <NavBar /><CreateActivity/> </>)}/>
          <Route path='/detail/:id' element={(<> <NavBar /><Detail /> </>)}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
