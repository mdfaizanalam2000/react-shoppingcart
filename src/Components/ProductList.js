import React from 'react'
import Product from './Product'

export default function ProductList(props) {
    return (
        props.productsList.length === 0 ? <h1>Oops, Nothing to display..Add items to your cart</h1> :
            props.productsList.map((product, i) => {
                return <Product product={product} key={i} incrementQty={props.incrementQty} index={i} decrementQty={props.decrementQty} removeItem={props.removeItem} />  //using index as key value here
            })
    )
}
