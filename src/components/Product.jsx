import React from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
  Flex,
} from "@chakra-ui/react";

const Product = ({ imageSrc, title, category, price, gender }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;



  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" rounded={"lg"}
        height={230}
        objectFit={"cover"}
        src={imageSrc} />

      <Flex justifyContent={"center"}>
        <Text
          data-cy="product-category"
          color="black"
        >
          {category}
        </Text>
        {gender && (
          <Tag
            data-cy="product-gender"
            size="sm"
            variant="subtle"
            colorScheme="red"
          >
            <TagLabel textTransform="uppercase">{gender}</TagLabel>
          </Tag>
        )}
      </Flex>

      <Heading
        data-cy="product-title"
        color="green"
        size="md"
      >
        {title}
      </Heading>

      <Box data-cy="product-price">
        {"Rs. "}
        {price}
        <Box as="span" color="blue" fontSize="sm">
          / unit
        </Box>
      </Box>
    </Stack>
  );
};

export default Product;