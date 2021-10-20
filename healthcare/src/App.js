
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound'
import Detail from './Components/Services/Detail';
import AuthProvider from './Components/AuthContext/AuthProvider';
import PrivateRoute from './Components/Private Rout/PrivateRoute';
import About from './Components/AboutUs/About';
import Cases from './Components/CaseStudies/Cases';
import SignIn from './Components/Login/Signup/SignIn';

function App() {

  
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
      <Switch>
      <Route exact path="/">
            <Home></Home>
          </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
          
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/case">
          <Cases></Cases>
        </Route>

        {/* Private Rout for detail component / */}
        <PrivateRoute exact path="/service/:serviceId">
          <Detail></Detail>
        </PrivateRoute>
        <Route path="/login">
       <SignIn></SignIn>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
        
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
