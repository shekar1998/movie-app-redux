import React from "react";

const User = (props: any) => {
	console.log(props);
	return (
		<div>
			<p>{props.state.name}</p>
			<p>{props.state.age}</p>
		</div>
	);
};

export default User;
