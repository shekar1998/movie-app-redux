import { connect } from "react-redux";
import "./App.css";
import Home from "./Components/Home";
import User from "./Components/User";

interface Props {
	user: any;
	setName: any;
	setAge: any;
}

function App(props: Props) {

	return (
		<div className="App">
			<User state={props.user}/>
			<Home
				setName={() => props.setName("Manjunath")}
				setAge={() => props.setAge(22)}
			/>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	console.log(state);
	return {
		user: state,
	};
};

const mapdispatchToProps = (dispatch: any) => {
	return {
		setName: (name: any) => {
			dispatch({
				type: "SET_USER",
				payload: name,
			});
		},
		setAge: (age: any) => {
			dispatch({
				type: "SET_AGE",
				payload: age,
			});
		},
	};
};

// export default App;

export default connect(mapStateToProps, mapdispatchToProps)(App);
