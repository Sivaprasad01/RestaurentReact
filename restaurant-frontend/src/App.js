import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Allrestaurants from './components/Allrestaurants/Allrestaurants';
import {Route,Routes} from 'react-router-dom'
import ViewRestaurants from './components/ViewRestaurants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <section>
        <Routes>
          <Route path='/' element={<Allrestaurants/>}/>
          <Route path='/view/:id' element={<ViewRestaurants/>}/>
        </Routes>
      </section>
      
      <Footer>
        <Footer/>
      </Footer>
    </div>
  );
}

export default App;
