import React, { useEffect, useState } from "react";
import "../components/css/cart.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Trash2 } from "react-feather";
import swal from "sweetalert";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [tax, setTax] = useState(2.0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Update quantity handler
  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity }; // update quantity
      }
      return item;
    });
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems, checkedItems);
  };

  // Remove item handler
  const handleRemoveItem = (id) => {
    axios
      .delete(`http://localhost:3500/cart/${id}`)
      .then(() => {
        axios
          .get("http://localhost:3500/cart")
          .then((res) => {
            setCartItems(res.data);
          })
          .catch((err) => {
            console.log("Gagal memperbarui data keranjang:", err);
          });
      })
      .catch((err) => {
        console.log("Gagal menghapus item:", err);
      });
  };

  // Calculate total price
  const updateTotalPrice = (items, checkedItems) => {
    let total = 0;
    items.forEach((item) => {
      if (checkedItems.includes(item.id)) {
        total += item.price * (item.quantity || 1);
      }
    });
    setTotalPrice(total);