import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bookmark, ShoppingCart } from "react-feather";
import swal from "sweetalert";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/products/${id}`);
        const book = response.data;
        setBookData(book);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCart = async (product) => {
    const productWithQuantity = {
      ...product,
      quantity,
    };

    try {
      const response = await axios.post('http://localhost:3500/cart', productWithQuantity);
      console.log('Produk berhasil ditambahkan ke keranjang:', response.data);

     
      swal("Berhasil!", "Produk berhasil ditambahkan ke keranjang", "success");
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
        console.error('Status error:', error.response.status);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Message error:', error.message);
      }

      
      swal("Gagal!", "Produk gagal ditambahkan ke keranjang", "error");
    }
  };

  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!bookData) {
    return <div>Product not found</div>;
  }