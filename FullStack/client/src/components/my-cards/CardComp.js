import {Card,Button} from 'react-bootstrap'
function CardComp ({card,handleClick}) {
 return   card &&   <Card style={{ width: '18rem', display:'inline-block' , padding:20, margin:10 }}>
  <Card.Img variant="top" style={{width:60}} src={card.bizImage} />
  <Card.Body>
    <Card.Title>{card.bizName}</Card.Title>
    <Card.Text>
      {card.bizDescription}
    </Card.Text>
    <Card.Text>
      {card.bizAddress}
    </Card.Text>
    <Card.Text>
      {card.bizPhone}
    </Card.Text>
    <Button variant="primary" onClick={(e)=>{
      e.preventDefault();
      handleClick(card._id);
    }} >Remove this card</Button>
  </Card.Body>
</Card>||<></>}
export default CardComp;