import React,{useState} from 'react'

const Button =()=>{
    const [num, setNum]=useState(0)
    const [num1, setNum1]=useState("")
    const [count, setCount]=useState(0)
    const [count1, setCount1]=useState(0)

    const Increment=()=>{
        setNum(num+1)
    }
    const Increment1=()=>{
        setNum1("")
    }
    const Change=()=>{
      setCount(count+1)
  }
  const Change1=()=>{
      setCount1(count1+1)
  }
  return (
    <>
    <h2>Assignment 5</h2>
    <p className='para'>This is an Example of pure component where it updates by comparing previous primitive this.props values but not any other nob-primitive value</p>
    <ul>
      <li>if click on first button only the left count will</li>
      <li>if you click on the second button nothing happens because we are typing to pass handler to the pure component so it will not change</li>
    </ul>
    <div className="first">
    <p>FirstCount: {num}</p>
    <p>SecondCount:{num1}</p>
    <button className='bg-primary  text-white' onClick={Increment}>first Button</button><br/>
    <button className='bg-primary text-white' onClick={Increment1}>Second Button</button><br/><br/><br/>
    </div>
    < hr/>
    <p className='para1'>Below is the demonstration for Higher order component</p>
    <ul>
      <li>Both buttons are separate components</li>
      <li>althrough they are two different components but they share same functional code</li>
      <li>Here we can see the by using the higher order components we can avoid coding same function multiple times </li>
      <li>Note that the higher order function created separate state for each wrapped component passed through them </li>
    </ul>
    <button id='ch' className='bg-info text-white' onClick={Change}>button from component 1 clicked {count} times</button>
    <button id='ch1' className='bg-info text-white' onClick={Change1}>button from component 2 clicked {count1} times</button>
    </>

  )
}
export default Button
