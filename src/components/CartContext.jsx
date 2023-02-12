import React ,{createContext} from 'react'
import { IconContext } from 'react-icons';

const cart = createContext();

function Cart(){
console.log(cart)
    const value = cart

return(
    <>
    <IconContext.Provider value={value}>
        <App/>
    </IconContext.Provider>
    </>
)


}

export default Cart;