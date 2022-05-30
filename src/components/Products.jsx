// import React from "react";

import React, { useEffect, useState } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  const [pageFilter, setPageFilter] = useState({
    pageNumber: 1,
    limit: 3,
    totalCount: 0,
  });
  const [products, setProducts] = useState([]);

  const { pageNumber, limit } = pageFilter;

  const handleOnAdd = (body) => {
    axios.post("http://localhost:8080/products", body).then((r) => {
      setProducts([...products, r.data]);
    });
  };
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `http://localhost:8080/products?_page=${pageNumber}&_limit=${limit}`
      );
      setPageFilter({
        ...pageFilter,
        totalCount: Number(response.headers["x-total-count"]),
      });

      setProducts(response.data);
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, limit]);

  return (
    <Flex direction="column"
      justifyContent="center"
      alignItems="center"
      borderColor="black"
      borderWidth={1}
      borderStyle="solid"
      borderRadius={100}
      p={4}
      mt={4}>
      {/*  AddProduct */}
      <AddProduct add={handleOnAdd} />
      <Grid w="full" gridGap={4} gridTemplateColumns="1fr 1fr 1fr">{/* List of Products */}
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </Grid>
      {/* Pagination */}
      <Pagination pageFilter={pageFilter} setPageFilter={setPageFilter} />
    </Flex>
  );
};

export default Products;