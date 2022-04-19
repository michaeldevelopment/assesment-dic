import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCart({ title, image, id }) {
  const [active, setActive] = useState(false);
  const [minutes, setMinutes] = useState(Math.floor(Math.random() * 2));
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 59) + 0);

  const [isHovered, setIsHovered] = useState();

  var timer = useRef();

  const variants = {
    variant1: {},
    variant2: {},
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (seconds === 0 && minutes === 0) {
        setMinutes(0);
        setSeconds(0);
        setActive(true);
        clearInterval(timer.current);
      }
    }, 1000);

    return () => clearInterval(timer.current);
  });

  const navigate = useNavigate();

  const handleOnRedirect = (e) => {
    e.preventDefault();
    navigate(`/detail/${id}`);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="productCart my-4"
        initial={{ opacity: 0, color: "#fff" }}
        animate={{
          scale: 0.93,
          opacity: 1,
          color: "#363636",
          rotate: isHovered ? 5 : 0,
        }}
      >
        <img src={image} alt={title}></img>
        <h5 className="titleProductCart">{title}</h5>
        <Row className="mt-4">
          <Col>
            <span>
              {"0"}
              {minutes}:
            </span>
            <span>
              {seconds < 10 && "0"}
              {seconds}
            </span>
          </Col>
          <Col>
            <Button
              onClick={handleOnRedirect}
              disabled={active}
              className="buyButton"
            >
              Comprar
            </Button>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
}

export default ProductCart;
