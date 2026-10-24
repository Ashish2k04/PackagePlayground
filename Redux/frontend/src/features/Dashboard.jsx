import {useDispatch, useSelector} from "react-redux"

const Dashboard = () => {
    const count = useSelector((state) => state.counter.value);

  return (
    <div>
        <h1>{count}</h1>
        <button>+</button>
        <button>-</button>
    </div>
  )
}

export default Dashboard