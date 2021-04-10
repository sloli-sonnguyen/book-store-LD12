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
import { PrimaryLoading } from '../../Base/Loading/Loading';

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

const renderProducts = (products, categoryId, languageId) => {
  const checkInclude = (array, id) => {
    const mapArray = array.map((item) => item.id);
    console.log(mapArray.includes(id));
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
  const [filterOptions, setFilterOptions] = useState({ category: undefined, language: undefined });

  const handleLeftFilterIconClick = () => {
    setShouldBeShowWidget(!shouldBeShowWidget);
  };

  const changeFilterOptions = (type, id) => {
    setFilterOptions({
      ...filterOptions,
      [type]: id,
    });
  };

  const { category, language } = filterOptions;

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
            <Filter />
          </ToolbarWrapper>
          <ProductList>{renderProducts(data, category, language)}</ProductList>
        </ProductListWrapper>
      </Container>
    </Wrapper>
  );
}

export default Products;
