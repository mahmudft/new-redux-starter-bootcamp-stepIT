
import {useSelector} from 'react-redux'
import MCard from './Card'


export default function Shopping(){
    const cards = useSelector(state => state.product.cartItems)
    return (
       <div>
        {cards.map(el => <MCard key={el.id} isShoppingCard={true} {...el}/>)}

        <div>
        <p>Total Price: {cards.reduce((a, b) => a + b.price,0)}$</p>
        <button>Proced to Checkout</button>
        </div>
       </div>
  
    )
}