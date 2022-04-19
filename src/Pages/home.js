import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCart from "../Components/productCart";

import { motion } from "framer-motion";

export default function Home({ products, seconds, active }) {
  return (
    <>
      <motion.h2
        className="text-center my-3"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{
          ease: "easeInOut",
          delay: 0.5,
          type: "tween",
        }}
      >
        {" "}
        Products{" "}
      </motion.h2>
      <Container className="my-1">
        <Row>
          {products.map((product) => {
            return (
              <Col key={product.id} md="auto">
                <ProductCart
                  title={product.title}
                  image={product.image}
                  id={product.id}
                  seconds={seconds}
                  active={active}
                  className={`productCart[${product.id}]`}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
