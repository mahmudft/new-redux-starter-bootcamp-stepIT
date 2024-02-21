import {useSelector, useDispatch} from "react-redux"
import { increment, decrement, reset } from "../app/features/counter/counterSlice"


export default function Counter(){
    const dispatch = useDispatch()

    const value = useSelector((state) => state.counter.value)

    return (
        <div style={{display:"flex", flexDirection:'row'}}>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}