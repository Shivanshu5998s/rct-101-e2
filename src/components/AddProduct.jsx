import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  Radio,
  Stack,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";

import { useState } from "react";

const AddProduct = ({ add }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  const [input, setinput] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();

  const change = (e) => {
    let { checked, type, name, value, files } = e.target;
    if (type === "checkbox") {
      setinput({
        ...input,
        [name]: checked,
      });
    } else if (type === "file") {
      setinput({
        ...input,
        [name]: files,
      });
    } else {
      setinput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    add({ ...input, imageSrc: "https://image.shutterstock.com/image-illustration/triangle-solid-black-golden-illustration-260nw-1862937556.jpg" });
    onClose();
  };
  return (
    <>

<Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Title"
                name="title"
                data-cy="add-product-title"
                onChange={change}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Category"
                name="category"
                data-cy="add-product-category"
                onChange={change}
              >
                <option value="shirt" data-cy="add-product-category-shirt">
                  Shirt
                </option>
                <option value="pant" data-cy="add-product-category-pant">
                  Pant
                </option>
                <option value="jeans" data-cy="add-product-category-jeans">
                  jeans
                </option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup name="gender" data-cy="add-product-gender">
                <Stack direction="row">
                  <Radio
                    value="male"
                    data-cy="add-product-gender-male"
                    onChange={change}
                  >
                    Male
                  </Radio>
                  <Radio
                    value="female"
                    data-cy="add-product-gender-female"
                    onChange={change}
                  >
                    Female
                  </Radio>
                  <Radio
                    value="unisex"
                    data-cy="add-product-gender-unisex"
                    onChange={change}
                  >
                    Unisex
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children="Rs." />
                <Input
                  type="number"
                  placeholder="Price"
                  name="price"
                  data-cy="add-product-price"
                  onChange={change}
                />
              </InputGroup>
            </FormControl>
            <Flex flexDirection="row-reverse">
              <Button
                mt={4}
                colorScheme="blue"
                type="submit"
                data-cy="add-product-submit-button"
                onClick={handleOnSubmit}
              >
                Create
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
