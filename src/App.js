
import './App.css';
import Navbar from './component/Navbar';
import {Helmet} from 'react-helmet'
import A from './component/A';
import B from './component/B';
import C from './component/C';
import D from './component/D';
import Aos from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from 'react';
import E from './component/E';
import F from './component/F';
function App() {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, [])
  
  return (
    <div className="App">
       <Helmet>
       <style>{'body { background-color: #f2bc94; }'}</style>
       </Helmet>
     <Navbar />
     <div data-aos="fade-bottom"><A /></div>
     <div data-aos="fade-left"><B /></div>
     <div data-aos="fade-right"><C /></div>
     <div data-aos="fade-up"><D /></div>
     <div data-aos="fade-left"><E/></div>
     <div data-aos="fade-right"><F /></div>
    </div>
  );
}

export default App;
