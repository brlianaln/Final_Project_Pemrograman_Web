import { useState, useEffect, useMemo } from "react";
import Card from "react-bootstrap/Card";
import "../components/css/Shop.css";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination'; 

function Shop() {
  const url = "https://literaryroom.com/api/books";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const getDataProduct = async () => {
    try {
      const response = await fetch(url);
      const dataProduct = await response.json();
      setProducts(dataProduct.books);

      const uniqueCategories = [
        "All Books",
        ...new Set(dataProduct.books.map((product) => product.category.name)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Books" || product.category.name === selectedCategory;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "white" }}>
        <div className="col-4 mt-3">
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search"
          />
          <h2>Category</h2>
          <ul className="list-group">
            {categories.map((category) => (
              <li
                key={category}
                className={`list-group-item ${selectedCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)}
                role="button"
                aria-current={selectedCategory === category ? "true" : "false"}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-8 mt-3">
          <div className="row">
            {currentProducts.map((product) => (
              <div className="col-md-3" key={product.id}>
                <CardProduct
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  author={product.author}
                  image={product.image}
                  category={product.category}
                />
              </div>
            ))}
          </div>
          <Pagination style={{ justifyContent: "center" }}>
            <Pagination.Prev
              onClick={() =>
                setCurrentPage((prevPage) => prevPage > 1 ? prevPage - 1 : prevPage)
              }
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                setCurrentPage((nextPage) => nextPage < totalPages ? nextPage + 1 : nextPage)
              }
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

function CardProduct({ id, title, price, author, image }) {
  const navigate = useNavigate();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleBuyNow = () => {
    navigate("/Checkout", { state: { product: { id, title, price, author, image } } });
  };

  return (
    <Card style={{ width: "183px" }}>
      <Container>
        <Link to={`/ProductDetail/${id}`}>
          <Card.Img variant="top" src={`https://literaryroom.com/storage/${image}`} style={{ objectFit: "contain" }} />
        </Link>
        <Card.Body>
          <Card.Title style={{ fontSize: "15px" }}>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <p className="price">{formatPrice(price)}</p>
        </Card.Body>
      </Container>
      <Button className="Buy" onClick={handleBuyNow}>Buy Now</Button>
    </Card>
  );
}

export default Shop;