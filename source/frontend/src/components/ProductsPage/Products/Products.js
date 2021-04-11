import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  ProductList,
  WidgetWrapper,
  ProductListWrapper,
  ToolbarWrapper,
  Icon,
} from './Style';
import Card from '../../Base/Card/Card';

import Widget from '../../Base/Widget/Widget';
import Filter from '../../Base/Filter/Filter';

const WidgetData = [
  {
    id: 1,
    title: 'Category',
    type: 'category',
    selects: [
      { id: 2, content: 'fiction' },
      { id: 3, content: 'history' },
      { id: 4, content: 'religion' },
      { id: 5, content: 'business' },
      { id: 6, content: 'science' },
    ],
  },
  {
    id: 2,
    title: 'Shop By Language',
    type: 'language',
    selects: [
      { id: 1, content: 'english' },
      { id: 2, content: 'spanish' },
      { id: 3, content: 'japanese' },
      { id: 4, content: 'korean' },
      { id: 5, content: 'vietnamese' },
      { id: 6, content: 'chinese' },
    ],
  },
];

const productsSort = (data, sortBy) => {
  let result = data;
  if (result) {
    if (sortBy === 1) {
      result = result.sort((a, b) => a.price * a.salePercent - b.price * b.salePercent);
    }

    if (sortBy === 2) {
      result = result.sort((a, b) => b.price * b.salePercent - a.price * a.salePercent);
    }

    if (sortBy === 3) {
      result = result.sort((a, b) => {
        const titleA = a.title.toUpperCase(); // bỏ qua hoa thường
        const titleB = b.title.toUpperCase(); // bỏ qua hoa thường
        if (titleA < titleB) return -1;
        return titleA > titleB ? 1 : 0;
      });
    }

    if (sortBy === 4) {
      result = result.sort((a, b) => {
        const titleA = a.title.toUpperCase(); // bỏ qua hoa thường
        const titleB = b.title.toUpperCase(); // bỏ qua hoa thường
        if (titleA < titleB) return 1;
        return titleA > titleB ? -1 : 0;
      });
    }

    return result;
  }
};

const renderProducts = (products, categoryId, languageId, sortBy) => {
  const checkInclude = (array, id) => {
    const mapArray = array.map((item) => item.id);
    return mapArray.includes(id);
  };
  if (products) {
    let filterProducts = [...products];

    if (categoryId) {
      filterProducts = filterProducts.filter((item) => {
        const result = checkInclude(item.category, categoryId);
        return result;
      });
    }

    if (languageId) {
      filterProducts = filterProducts.filter((item) => {
        const result = checkInclude(item.language, languageId);
        return result;
      });
    }

    if (sortBy) {
      filterProducts = productsSort(filterProducts, sortBy);
    }

    return filterProducts.map((item) => (
      <Card
        key={item.id}
        xs={12}
        sm={6}
        md={4}
        src={item.imageUrl}
        subTitle={item.author}
        title={item.title}
        text1={`${Math.floor(item.price * item.salePercent)}.00$`}
        text2={`${item.price}$`}
        id={item.id}
      />
    ));
  }
};

function Products({ data }) {
  const [shouldBeShowWidget, setShouldBeShowWidget] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    category: undefined,
    language: undefined,
    sortBy: null,
  });

  const handleLeftFilterIconClick = () => {
    setShouldBeShowWidget(!shouldBeShowWidget);
  };

  const changeFilterOptions = (type, id, sortValue) => {
    setFilterOptions({
      ...filterOptions,
      [type]: id,
    });

    if (sortValue) {
      setFilterOptions({
        ...filterOptions,
        sortBy: sortValue,
      });
    }
  };

  const { category, language, sortBy } = filterOptions;

  return (
    <Wrapper>
      <Container p={10} between="true">
        <WidgetWrapper shouldBeShowWidget={shouldBeShowWidget}>
          {WidgetData.map((item) => (
            <Widget
              changeFilterOptions={changeFilterOptions}
              key={item.id}
              title={item.title}
              type={item.type}
              selects={item.selects}
              activeId={item.type === 'category' ? category : language}
            />
          ))}
        </WidgetWrapper>
        <ProductListWrapper>
          <ToolbarWrapper p={0}>
            <Icon className="bx bx-filter" onClick={handleLeftFilterIconClick} />
            <Filter changeFilterOptions={changeFilterOptions} />
          </ToolbarWrapper>
          <ProductList>{renderProducts(data, category, language, sortBy)}</ProductList>
        </ProductListWrapper>
      </Container>
    </Wrapper>
  );
}

export default Products;
