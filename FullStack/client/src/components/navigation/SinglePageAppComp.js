import NavigationRouteComp from'./NavigationRouteComp';
import NavigationBarComp from "./NavigationBarComp";
import {BrowserRouter as Router} from 'react-router-dom';
function SinglePageAppComp ({set,user}) {
    return <Router> <NavigationBarComp user={user} ></NavigationBarComp>
    <NavigationRouteComp set={set} user={user}></NavigationRouteComp>
    </Router>
}
export default SinglePageAppComp;