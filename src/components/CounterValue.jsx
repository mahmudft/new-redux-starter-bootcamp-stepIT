
import {useSelector} from 'react-redux'

export default function CounterValue(){
    const value = useSelector((state) => state.counter.value)
    return(
        <p>{value}</p>
    )
}