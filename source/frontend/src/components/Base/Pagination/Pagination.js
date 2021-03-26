import React, { useState } from 'react';
import { Wrapper, Button } from './Style';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleButtonClick = (nextPage) => {
    setCurrentPage(nextPage);
  };

  if (currentPage === 1) {
    return (
      <Wrapper>
        <Button>
          <i className="bx bxs-chevron-left" />
        </Button>
        <Button activeColor="black">{currentPage}</Button>
        <Button onClick={() => handleButtonClick(currentPage + 1)}>{currentPage + 1}</Button>
        <Button onClick={() => handleButtonClick(currentPage + 2)}>{currentPage + 2}</Button>
        <Button onClick={() => handleButtonClick(currentPage + 1)}>
          <i className="bx bxs-chevron-right" />
        </Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Button onClick={() => handleButtonClick(currentPage - 1)}>
        <i className="bx bxs-chevron-left" />
      </Button>
      <Button onClick={() => handleButtonClick(currentPage - 1)}>{currentPage - 1}</Button>
      <Button activeColor="black">{currentPage}</Button>
      <Button onClick={() => handleButtonClick(currentPage + 1)}>{currentPage + 1}</Button>
      <Button onClick={() => handleButtonClick(currentPage + 1)}>
        <i className="bx bxs-chevron-right" />
      </Button>
    </Wrapper>
  );
}

export default Pagination;
