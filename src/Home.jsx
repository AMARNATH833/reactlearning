import React from 'react'
import { useState } from 'react';

export default function Home() {
    let [values,setval]=useState("")
    function f1(){
        return "Amar"
    }
  return (
    <div>Home Alone {f1()} {values}
    <input type={'text'} onChange={(e)=>{console.log(e.target.value);
    setval((val)=>{
        console.log(val,e.target.value);
        return e.target.value
    }) 
    }}></input>
    </div>
  )
}
