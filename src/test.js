import * as React from 'react';

export default function ReceivingComponent(props) {
        return (
          <div>
            <h1>Selected values:</h1>
            <h2>
              {props.mode} 
              {props.row} {props.column}
              {props.symbol}
            </h2>
          </div>
        );
      }
    
