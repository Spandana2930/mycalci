//import logo from './logo.svg';
import './App.css';
import FooterComponent from "./components/FooterComponent/footercomponent";
import AboutPage from "./components/FooterComponent/Aboutpage/aboutpage";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
            <Switch>
                <Route
                    exact path="./components/FooterComponent/Aboutpage/aboutpag"
                    render={()=><FooterComponent/>}
                />
                <Route
                    exact path="/"
                    render={()=><AboutPage/>}
                />
        
            </Switch>
        </Router>
    </>
  );
}

export default App;
