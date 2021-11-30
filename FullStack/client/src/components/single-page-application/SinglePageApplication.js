import {BrowserRouter as Router} from 'react-router-dom'; 
import NavbarComp from './NavbarComp';
import SwitchComp from './SwitchComp';

function  SinglePageApplication() {
    
    var jsx =<Router> 
       <NavbarComp></NavbarComp>
  <SwitchComp></SwitchComp>
  </Router>;

  return jsx;
}
export default SinglePageApplication;