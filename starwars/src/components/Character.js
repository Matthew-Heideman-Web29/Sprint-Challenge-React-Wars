// Write your Character component here
import React from 'react';
import { Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardImg} from 'reactstrap';

function Character(props){
    console.log(props.data)
 return(
    <Col sm = '6'>
    {props.data.map(item => {
    return  <Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} key = {item.id} >
                <CardImg src={item.image} alt = {item.name} />
                <CardHeader>
                    <CardTitle>
                        Name: {item.name}
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <CardSubtitle>
                        Staus: {item.status}
                    </CardSubtitle>
                    <CardText>
                        Species: {item.species}
                    </CardText> 
                    <CardText>
                        Homeworld and Universe (if applicable): {item.origin.name}
                    </CardText>
                    <CardText>
                        Episode Count: {item.episode.length}
                    </CardText>
                </CardBody>
            </Card>
    })
    }
    </Col>)
 
}
export default Character;