import * as React from 'react';

const ReceivingComponent = (props) =>{
    return(
        <>
            <h1> Selected values </h1>
            <h2>{props.mode}</h2>
            <h2>{props.row}{props.column}</h2>
            <h2>{props.symb}</h2>
        </>
    )

} 

export default ReceivingComponent;