import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
        {/* all of routing page */}
        <Router>
          <Header />
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <PrivateRoute exact path='/service/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute exact path='/about'>
              <AboutUs></AboutUs>
            </PrivateRoute>

            <PrivateRoute exact path='/contact'>
              <Contact></Contact>
            </PrivateRoute>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/register'>
              <Register></Register>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
