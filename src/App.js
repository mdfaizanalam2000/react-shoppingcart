// import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import React, { useState } from 'react';
import AddItem from './Components/AddItem';
function App() {
  const products = [
    {
      name: "iPhone 14 Pro Max",
      price: 149999,
      quantity: 0
    },
    {
      name: "iPhone 14 Pro",
      price: 99999,
      quantity: 0
    },
    {
      name: "iPhone 14",
      price: 49999,
      quantity: 0
    }
  ]

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQty = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount = newTotalAmount + newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const decrementQty = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity !== 0) {
      newProductList[index].quantity--;
      newTotalAmount = newTotalAmount - newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const resetData = () => {
    let newProductList = [...productList];
    newProductList.map(items =>
      items.quantity = 0
    )
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0
    })
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <section className='container my-4'>
        <AddItem addItem={addItem} />
        <ProductList productsList={productList} incrementQty={incrementQty} decrementQty={decrementQty} removeItem={removeItem} />
      </section>
      <Footer totalAmount={totalAmount} resetData={resetData} />
    </>
  );
}

export default App;
