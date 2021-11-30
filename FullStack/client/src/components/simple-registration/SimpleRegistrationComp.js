import {Form,Button} from 'react-bootstrap';
import validateSimpleRegistration from '../../helpers/simpleRegistrationHelper';
import {  toast } from 'react-toastify';

const notify = (message) => toast(message);
function  SimpleRegistrationComp({text='', clickHandler= f=>f}) {
    return <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>
    <Button variant="primary" type="submit"  
    onClick={(e)=>{
       e.preventDefault();
      var validatioErrorOrData = validateSimpleRegistration('formBasicEmail','formBasicPassword','formBasicName');
      if(typeof validatioErrorOrData =='string')
      {
          notify(validatioErrorOrData);
      }
      else
      {
        clickHandler(validatioErrorOrData);
      }
       }}>
     {text}
    </Button>
  </Form>;
  
}

export default SimpleRegistrationComp;