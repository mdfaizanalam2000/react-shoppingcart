import React from 'react'

export default function Product(props) {
    return (
        <div className='row'>
            <div className="col-4">
                <h3>{props.product.name}<span className="badge bg-secondary">₹{props.product.price}</span></h3>
            </div>
            <div className="col-4">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={() => { props.decrementQty(props.index) }}>-</button>
                    <button type="button" className="btn btn-primary">{props.product.quantity}</button>
                    <button type="button" className="btn btn-primary" onClick={() => { props.incrementQty(props.index) }}>+</button>
                </div>
            </div>
            <div className="col-2">
                {props.product.price * props.product.quantity}
            </div>
            <div className="col-2">
                <button className="btn btn-danger" onClick={() => { props.removeItem(props.index) }}>Remove Item</button>
            </div>
        </div>
    )
}
