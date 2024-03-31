import { useEffect } from 'react';
import './App.css';
import Aos from "aos";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/PRofile';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import { Contact } from './components/contact/Contact';
function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <Header/>
    <main>
     <Profile/>
     <Services />
     <Portfolio />
     <Contact/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
