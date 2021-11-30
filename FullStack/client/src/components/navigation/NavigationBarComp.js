import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {tabs} from '../../helpers/tabs';

function  NavigationBarComp ({user}) {
     return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Container>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
       {
          user._id
          ?
            tabs.filter(x=>x.displayForLoggedin).map((tab,index)=> <Nav.Link key={index} to={tab.href} as={Link}> {tab.icon}  {tab.name} </Nav.Link>     )
          :
            tabs.filter(x=> ! x.hideForLoggedout ).map((tab,index)=> <Nav.Link key={index} to={tab.href} as={Link}> {tab.icon} {tab.name} </Nav.Link>     )
        } 
      </Nav> 
       </Navbar.Collapse>
     </Container>
   </Navbar>
;
}

export default NavigationBarComp;
