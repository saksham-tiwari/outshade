import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../assets/insight.jpeg"
function InsightCard() {
  return (
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{fontWeight:"bold"}}>Running remote sites and onboarding</Card.Title>
        <Card.Text style={{fontSize:"14px", color:"gray"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:"#41b4ee", borderColor:"#41b4ee", fontWeight:"bold"}}>Continue</Button>
      </Card.Body>
    </Card>
  );
}

export default InsightCard;