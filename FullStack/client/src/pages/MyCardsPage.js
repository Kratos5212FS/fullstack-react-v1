import { insertNewCard } from "../helpers/FetchHelper";
import {Container,Button} from 'react-bootstrap';
import CardsComp from "../components/my-cards/CardsComp";
import CreateCardComp from "../components/my-cards/CreateCardComp";
import {useState} from 'react';
function  MyCardsPage () {

   const [isAddMode,setAddMode]=  useState(false);
   
    return  <>
                    <Button className="btn btn-success" onClick={()=>{
                                setAddMode(true);
                     }}>Create New Card</Button>
                <Container>
                  {!isAddMode && <CardsComp></CardsComp>}
                  {isAddMode && <CreateCardComp clickHandler={insertCard}>
                       </CreateCardComp>} 
                    </Container>
            </>
                 
            function  insertCard (data ) {
                insertNewCard(data, localStorage.getItem('token'), ()=>{
                     setAddMode(false);
                });
            }
}
export default MyCardsPage;