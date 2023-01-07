import React, { useState } from 'react'

export default function AddItem(props) {

    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.addItem(name, Number(price));
                setName("");
                setPrice("");
            }}>
                <div className="mb-3">
                    <label htmlFor="exampleInput1" className="form-label">Product Name</label>
                    <input required type="text" className="form-control" id="exampleInput1" name='productName' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPrice1" className="form-label">Product Price</label>
                    <input required type="number" className="form-control" id="exampleInputPrice1" name='productPrice' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" >Add Item</button>
            </form>
        </div>
    )
}
