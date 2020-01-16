import React from "react";

import "./Positions.css";

const Positions = props => {
    return (
        <div className="Position">
            <Card>
                <CardImg top width="100%" src={props.image} alt={props.name} />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle><b>Price: </b>{props.price} kgs</CardSubtitle>
                    <Button onClick={props.onClick}>Add to cart</Button>
                </CardBody>
            </Card>
        </div>
    )
};

export default Positions;
