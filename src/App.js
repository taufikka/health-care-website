import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/service/:id'>
            <ServiceDetails></ServiceDetails>
          </Route>

          <Route exact path='/about'>
            <AboutUs></AboutUs>
          </Route>

          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
