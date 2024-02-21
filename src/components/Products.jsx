import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { fillBucket } from "../app/features/products/productSlice";
import MCard from "./Card";


export default function Products(){
    const [state, setState] = useState([])
    const dispatch = useDispatch()
    const items = useSelector(state => state.product.items)

    useEffect(() => {
        async function fetchFakeData(){
            const list = await fetch('/data.json')
            const res = await list.json()
            dispatch(fillBucket(res))
        }
        if(!items.length){
            fetchFakeData()
        }
    },[])

    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            {items?.map(el => <MCard key={el.id} {...el}/>)}
        </div>
    )
}