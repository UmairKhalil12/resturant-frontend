import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import BookTable from './Components/BookTable/BookTable';
import overlaybg from './assets/overlaybg.png'
import Menu from './Components/Menu/Menu';
import ChefWord from './Components/ChefWord/ChefWord';
import IntroVideo from './Components/IntroVideo/IntroVideo';
import Laurels from './Components/Laurels/Laurels';
import PhotoGallery from './Components/PhotoGallery/PhotoGallery';
import FindUs from './Components/FindUs/FindUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className="App" >
        <Navbar />
        <Header />
        <AboutUs />
        <BookTable />
        <Menu />
        <ChefWord />
        <IntroVideo />
        <Laurels />
        <PhotoGallery />
        <FindUs />
        <Footer />
      </div>

    </>
  );
}

export default App;
