const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_SHOP_BY_CONCERN": {
      return {
        ...state,
        shopByConcernProducts: action.payload
      }
    }
    case "GET_ALL_PRODUCTS": {
      return {
        ...state,
        TotalProducts: action.payload
      }
    }
    case "GET_HONEY_PRODUCT": {
      return {
        ...state,
        honey: action.payload
      }
    }
  }
  return state
}

export default ProductReducer