import React,{useContext} from 'react'
import DeliveryIcon from './DeliveryIcon'
import DropdownIcon from './DropdownIcon'
import ItemDetails from './ItemDetails'
import {CartContext} from '../Context/CartContext'

const ItemCard = () => {
    const {state:{cart}}=useContext(CartContext)
    return (
        <>
            
                <div class="card text-left shadow p-3 mb-5 bg-white rounded ml-5" style={{ width: '55rem' }}>
                    <div >
                        <div className="float-left">
                            <b>My cart({cart.length})</b>
                        </div>
                        
                        <div className="float-right">
                            <DeliveryIcon />
                            <span >Deliver to</span>&nbsp;&nbsp;
                            <input type="text" value="Hyderabad-501401" />
                            <DropdownIcon />

                        </div>

                    </div>
                   
                         <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                    {cart.map((item, index) =>
                    <div class="card-body">
                        <ItemDetails
                            item={item}
                            index={index}
                        >
                        </ItemDetails>
                      
                    </div>
                     )}
                      </li>
                    </ul>
                    <div >

                        <div className="col">
                            <a href="#" class="btn  float-right text-white" style={{ backgroundColor: 'Tomato' }}>PLACE ORDER</a>
                        </div>

                    </div>
                </div>
           
        </>
    )
}
export default ItemCard