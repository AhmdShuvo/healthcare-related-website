
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/Login/Signup/SignUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <div >
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
        <Route path="/singup">
          <SignUp></SignUp>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
        
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
