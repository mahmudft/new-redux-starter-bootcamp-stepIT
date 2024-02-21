import {useDispatch, useSelector} from 'react-redux'
import { addToCard, removeFromCard } from '../app/features/products/productSlice';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MCard(props) {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.product.cartItems)
    const {title, image,description, price, isShoppingCard, id} = props

    const handleCard = (props) => {
        dispatch(addToCard(props))
    }
    const removeCard = (props) => {
        console.log(props);
        dispatch(removeFromCard(props.id))
    }

    const checkIfProductInStore = () => Boolean(cards?.find(el => el.id == props.id))
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} width={200} height={200}/>
            <Card.Body>
                <Card.Title>{title} - {id}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    <span style={{color: 'red'}}>{price} $</span>
                </Card.Text>
                <Button disabled={checkIfProductInStore()} onClick={() =>handleCard(props)} variant="primary">{
                    checkIfProductInStore()? "Already in the Card":  "Add To Card"
                }</Button>
                  {isShoppingCard && <Button 
                  onClick={() =>removeCard(props)} variant="primary">Remove Card</Button>}
            </Card.Body>
        </Card>
    )
}