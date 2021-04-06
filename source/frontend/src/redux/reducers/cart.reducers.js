const initialState = {
  products: [
    {
      id: '1',
      title: 'Corporate Infrastructure Associate',
      price: '449.00',
      salePercent: 0.3,
      quantity: 71647,
      totalPrice: 1000,
      category: 'history',
      language: 'japanese',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-1.jpg',
    },
    {
      id: '2',
      title: 'Dynamic Security Orchestrator',
      price: '843.00',
      salePercent: 0.7,
      quantity: 36367,
      totalPrice: 1000,
      category: 'history',
      language: 'japanese',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-100.jpg',
    },
    {
      id: '3',
      title: 'National Accountability Director',
      price: '170.00',
      salePercent: 0.5,
      quantity: 64556,
      totalPrice: 1000,
      category: 'history',
      language: 'japanese',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-34.jpg',
    },
  ],
  note: '',
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cart;
