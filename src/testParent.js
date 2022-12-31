import * as React from 'react';

import Child from './testChild';

export default function Parent(){
  
  const pull_data = (data) =>{
    console.log(data);
  }

  return (
    <>
      <Child
        func={pull_data}
      />
    </>
  )
}