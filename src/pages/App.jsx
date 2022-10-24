
import '../App.css';
import {Routes, Route} from "react-router-dom"

/* Pages */
import Home from './Home/index';
import About from './About/index';
import Error from './404/index'

/* Components */
import HousingDisplay from '../components/HousingDisplay/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/house/:id" element={<HousingDisplay/>} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
