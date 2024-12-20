import React from "react";

const PersonCard =({picture,name})=>{
    return(
        <div>
            <img src={picture.large} alt="person" />
            <p>{name.first} {name.last}</p>
        </div>
    );
};
export default PersonCard;