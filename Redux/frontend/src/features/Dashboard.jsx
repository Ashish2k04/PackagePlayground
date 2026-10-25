import {useDispatch, useSelector} from "react-redux"
import { increment, decrement, increaseByAmount } from "./counterSlice";
import { useState } from "react";

const Dashboard = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>Increase by 1</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrease by 1</button><br />
        <input type="number" onChange={(e)=>{setNum(Number(e.target.value))}} placeholder="Enter a number" />
        <button onClick={()=>{dispatch(increaseByAmount(num))}}>Increase by {num}</button>
    </div>
  )
}

export default Dashboard