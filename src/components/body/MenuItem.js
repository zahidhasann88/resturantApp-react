import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { CardBody, CardImgOverlay, CardTitle } from 'reactstrap';


const MenuItem = props => {
    return (
        <div>
        <Card style={{margin: "10px"}}>
            <CardBody>
                <CardImg 
                with="100%" 
                alt={props.dish.name} 
                src={props.dish.image} 
                style={{opacity: "0.5"}} />
                <CardImgOverlay>
                    <CardTitle>{props.dish.name}</CardTitle>
                </CardImgOverlay>
            </CardBody>
        </Card>
        </div>
    );
}

export default MenuItem;