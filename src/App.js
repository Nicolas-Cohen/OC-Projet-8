import './App.css';

import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Error from "./Pages/Error/Error"
import Accomodation from "./Pages/Accomodation/Accomodation"

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <div className='App-HeaderAndMain'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
