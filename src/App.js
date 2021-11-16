/**
 * Importing all the local components
 * Importing BrowserRouter as Router from react-router-dom
 */
import './App.css';
import FooterComponent from "./components/FooterComponent/footercomponent";
import AboutPage from "./components/FooterComponent/Aboutpage/aboutpage";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import BodyComponent from "./components/BodyComponent/bodycomponent";
import HeaderComponent from "./components/HeaderComponent/headercomponent";
import Main from "./components/main";

/**
 * 
 * @params Creating function App() 
 * Assigning the path for the components for routing purpose.
 * exporting the App()
 */
function App() {
  return (
    <>
    <Router>
            <Switch>
            <Route
                    exact path="/"
                    render={()=><Main/>}
                />
                <Route
                    exact path="/about"
                    render={()=><AboutPage/>}
                />
        
            </Switch>
        </Router>
    </>
  );
}

export default App;
