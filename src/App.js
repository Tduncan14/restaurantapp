import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, Menu } from './containers';
import Navbar from './components/Navbar/Navbar';
import './app.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <AboutUs/>
  
    <Menu/>
    <Chef/>
    <Intro/>
    <Laurels/>
    <Gallery/>
    <Findus/>
    <Footer/> 
    
    </div>
  );
}

export default App;
