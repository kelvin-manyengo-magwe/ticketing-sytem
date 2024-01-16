import './App.css';
import Signin from './Authenitication/Signin/Signin';
import Signout from './Authenitication/Signout/Signout';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './Layouts/SideBar';

function App() {
  return (
    <div className="App">

        <div className="authenitication">
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signout" element={<Signout />} />
            <Route path="/sidebar" element={<SideBar />} />
            <Route path="*" element={<Signin />} />
          </Routes>
        </div>

    </div>
  );
}

export default App;
