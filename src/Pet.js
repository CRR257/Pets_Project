import React from "react";

const Pet = props => {
    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, props.name),
    //     React.createElement("h2", {}, props.animal),
    //     React.createElement("h2", {}, props.breed)
    // ]);
    return (
    <div>
        <h1>{props.name.toUpperCase()}</h1>
        <h1>{props.animal.toUpperCase()}</h1>
        <h1>{props.breed.toUpperCase()}</h1>
    </div>
    )
};


export default Pet;