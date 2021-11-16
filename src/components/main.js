/**
 * Importing all the local components;
 */
import BodyComponent from "./BodyComponent/bodycomponent";
import HeaderComponent from "./HeaderComponent/headercomponent";
import FooterComponent from "./FooterComponent/footercomponent";

/**
 * 
 * @params Creating function Main 
 * returning the components
 */
function Main(){
    return(
        <>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
        </>
    )
}
export default Main;