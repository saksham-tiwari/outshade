import Card from 'react-bootstrap/Card';
import user from "../../assets/user.jpeg"

function ReviewCard(props) {
  return (
    <Card style={{ width: '20rem' }} className="reviewCard">
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <img src={user} alt="user" className='reviewImg'/> {props.name}, Writer
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;