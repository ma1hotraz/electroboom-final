import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ColorRing } from "react-loader-spinner";
import { AddShoppingCart } from "@mui/icons-material";
import axios from "axios";
import "./styles/product.css";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartslice";

const Product = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/productsdata"
        );
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterResult = (category) => {
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filteredResult = data.filter((item) => item.category === category);
      setFilteredData(filteredResult);
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    setData([...data, item]);
    console.log("Added to cart:", item);
  };

  return (
    <div className="products-page-bg-img">
      <div className="main">
        <h1 className="text-center text-black display-6">Our Products</h1>

        <div className="container-fluid">
          <div className="row mt-4 mx-2">
            {loading ? (
              <div className="loader">
                <ColorRing />
              </div>
            ) : (
              <>
                <div className="col-md-3">
                  <div className="categories-menu sticky-top mb-5">
                    <h3 className="text-center mb-3">Categories:</h3>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("All")}
                    >
                      All
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Laptops & TVs")}
                    >
                      Laptops & TVs
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Audio")}
                    >
                      Audio
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Wearables")}
                    >
                      Wearables
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Gaming")}
                    >
                      Gaming
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Tablets")}
                    >
                      Tablets
                    </button>
                    <button
                      className="btn bg-dark text-white w-100 mb-4"
                      onClick={() => filterResult("Cameras")}
                    >
                      Cameras
                    </button>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    {filteredData.map((values) => {
                      const { id, title, image, description, price } = values;
                      return (
                        <div className="col-md-4 mb-4" key={id}>
                          <div className="card">
                            <img
                              src={image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                              <p className="card-text">{description}</p>
                              <h6 className="card-price">&#8377;{price}</h6>
                              <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddShoppingCart />}
                                onClick={() => handleAddToCart(values)}
                              >
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
