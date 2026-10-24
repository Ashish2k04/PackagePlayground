import {useDispatch, useSelector} from "react-redux"
import { increment, decrement } from "./counterSlice";

const Dashboard = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  )
}

export default Dashboard