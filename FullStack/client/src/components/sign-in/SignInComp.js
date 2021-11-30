import  validateSignIn from '../../helpers/signInHelper';
import {Form,Button} from 'react-bootstrap';
import {toast} from 'react-toastify';
function  SignInComp({clickHandler=f=>f}) {
     return  <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password"  />
     </Form.Group>
     <Button variant="primary" type="submit"  onClick={(e)=>{
         e.preventDefault();
        var errorOrData=    validateSignIn('formBasicEmail','formBasicPassword');
        if(typeof errorOrData=='string')
        {
          toast(errorOrData);
        }
        else
        {
          clickHandler(errorOrData);
        }
         
     }}>
      Sign in
     </Button>
   </Form>
}
export default SignInComp;