import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import Footer from './components/Footer.js';
import Additem from './components/Additem';

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    newproductList[index].quantity++
    newTotalAmount += newproductList[index].price
    settotalAmount(newTotalAmount);
    setProductList(newproductList);
  };

  const decrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newproductList[index].quantity > 0) {
      newproductList[index].quantity--
      newTotalAmount -= newproductList[index].price
    }
    settotalAmount(newTotalAmount);
    setProductList(newproductList);
  };

  const resetQuantity = (index) =>{
    let newproductList = [...productList];
    newproductList.map((products)=>{
      products.quantity = 0;
    })
    setProductList(newproductList);
    settotalAmount(0);
  }

  const removeitem = (index) =>{
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newproductList[index].quantity * newproductList[index].price
    newproductList.splice(index, 1);
    setProductList(newproductList);
    settotalAmount(newTotalAmount);
  };

  const addItem = (name, price) =>{
    let newproductList = [...productList];
    newproductList.push({
      price:price,
      name: name,
      quantity : 0
    });
    setProductList(newproductList);
  }
  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <Additem addItem = {addItem}/>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeitem = {removeitem} />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
