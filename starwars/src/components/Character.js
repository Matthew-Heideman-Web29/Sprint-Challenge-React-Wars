// Write your Character component here
import React from 'react';
import {Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

function Character(props){
    console.log(props.data)
 return(
    <div>
        {props.data.forEach(item => {
        return  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} key = {item.id} >
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
                            Homeworld and Universe (if applicable): {item.orign.name}
                        </CardText>
                        <CardText>
                            Episode Count: {item.episodes.length}
                        </CardText>
                    </CardBody>
                </Card>
        })
        }
    </div>
 )
}
export default Character;