import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";

const Pagination = ({ pageFilter, setPageFilter }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  const { pageNumber, limit, totalCount } = pageFilter;

  const filter = (change) => {
    setPageFilter({
      ...pageFilter,
      ...change,
    });
  };

  return (
    <ButtonGroup size="md" isAttached variant="outline" mt={12}>
      <Button data-cy="pagination-first-button" disabled={pageNumber === 1} onClick={() => filter({ pageNumber: 1 })}>First</Button>
      <Button data-cy="pagination-previous-button" disabled={pageNumber === 1} onClick={() => filter({ pageNumber: pageNumber - 1 })}>Previous</Button>
      <Select data-cy="pagination-limit-select" width="fit-content" value={limit} >
        <option data-cy="pagination-limit-3" value="">3</option>
        <option data-cy="pagination-limit-6" value="">6</option>
        <option data-cy="pagination-limit-9" value="">9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={pageNumber * limit > totalCount} onClick={() => filter({ pageNumber: pageNumber + 1 })}>Next</Button>
      <Button data-cy="pagination-last-button" disabled={pageNumber * limit > totalCount} onClick={() => filter({ pageNumber: Math.ceil(totalCount / limit) })}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;