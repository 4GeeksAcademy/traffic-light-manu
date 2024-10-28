import React, {useState} from "react";

//create your first component
const TrafficLight = () => {

	const [color, setColor] = useState("red");

	return (
		<>
		<div className="bg-dark align-items-center justify-content-center" style={{width: '15px', height: '100px'}}>
		</div>
		<div className="d-flex flex-column bg-dark align-items-center justify-content-center rounded" style={{width: '90px'}}>
			<div onClick={() => {
					setColor("red")
				}} className={"m-2 border-light rounded-circle bg-danger opacity-50 " + (color == "red" ? "onLight" : "")} style={{width: '60px', height: '60px'}}>
			</div>
			<div onClick={() => {
					setColor("yellow")
				}} className={"m-1 border-light rounded-circle bg-warning opacity-50 " + (color == "yellow" ? "onLight" : "")} style={{width: '60px', height: '60px'}}>
			</div>
			<div onClick={() => {
					setColor("green")
				}} className={"m-2 border-light rounded-circle bg-success opacity-50 " + (color == "green" ? "onLight" : "")} style={{width: '60px', height: '60px'}}>
			</div>
		</div>
		</>
	);
};

export default TrafficLight;
