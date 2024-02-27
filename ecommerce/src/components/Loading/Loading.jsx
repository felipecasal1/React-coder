

export const Loading = ({ color, myClass, other }) => {
	const customProps = true
		? { className: "lds-hourglass", id: 1, title: "SPINNER" }
		: "";

	// return <div className="lds-hourglass"></div>;
	// return (
	// 	<div
	// 		// style={{ backgroundColor: color ? color : "red" }}
	// 		// className={myClass ? myClass : ""}
	// 		className={`${myClass ? myClass : ""} ${other || ""}`}>
	// 		Cargando...
	// 	</div>
	// );

	return <div {...customProps}></div>;
};