
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/Login/Signup/SignUp';
import Login from './Components/Login/Login';
import Detail from './Components/Services/Detail';
import AuthProvider from './Components/AuthContext/AuthProvider';
import PrivateRoute from './Components/Private Rout/PrivateRoute';
import THit from './Components/Provate/Private';

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
        <PrivateRoute path="/services">
          <Services></Services>
          
        </PrivateRoute>

        <PrivateRoute path="/private">
          <THit></THit>
          
        </PrivateRoute>
        <Route exact path="/service/:serviceId">
          <Detail></Detail>
        </Route>
        <Route path="/signup">
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
    </AuthProvider>
    
  );
}

export default App;
