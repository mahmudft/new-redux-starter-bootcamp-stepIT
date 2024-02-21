
import {useSelector} from 'react-redux'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

export default function Navbar() {
    const cards = useSelector(state => state.product.cartItems)
    return(
        <nav style={{display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
             <Link to={'/'}>Home</Link>
            <a href="#">Women</a>
            <a href="#">Men</a>
            <a href="#">Kids</a>
            <Link to={'/shopping'}>
                Shopping <Badge bg="secondary">{cards.length}</Badge>
            </Link>
            <input placeholder='email' name='email' type='email'/>
        </nav>
    )
}