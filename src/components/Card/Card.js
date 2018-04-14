import React from "react";
import "./Card.css";

const Card = props => {
	return (
		<div>
			<img
				className="card"
				onClick={(event, id) => props.clickHandler(event, props.id)}
				src={props.imageURL}
				id={props.id}
				alt=""	/>
		</div>
	);
};

export default Card;
