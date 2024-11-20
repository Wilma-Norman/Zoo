import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Navigation from './Components/Navigation'
import Birds from './Components/pages/Birds/index'
import Reptiles from './Components/pages/Reptiles/index'
import Mammals from './Components/pages/Mammals/index'
import Footer from './Components/Footer'



const App = () => {
  const [activeCategory, setActiveCategory] = useState('Home');

    const section = {
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems: "flex-start",
    }


  return (
    <>
    <Header />
      <div>
        <Navigation activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div style={section}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mammals" element={<Mammals />} />
            <Route path="/birds" element={<Birds />} />
            <Route path="/reptiles" element={<Reptiles />} />
          </Routes>          
        </div>
      </div>
    <Footer />
    </>
  );
};

export default App;











/*
function App() {
  const [active, setActive] = useState("Home"); 
  return (
    <>
      <Header />
      <Navigation navActive={active} navaSetActive={setActive}/>       
      {active === "Home" && <Home />} 
      {active === "Mammals" && <Mammals />}
      {active === "Cassowary" && <Cassowary />}
      {active === "Birds" && <Birds />}
      {active === "Reptiles" && <Reptiles />}
      <Footer />
      
    </>
  )
}

export default App

*/
