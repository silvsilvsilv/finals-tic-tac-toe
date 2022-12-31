import * as React from 'react';

const Child = (props) =>{

    props.func('My name is blah');

    return (
       
            <h1> I am the Child Component </h1>
        
    )

}

export default Child;