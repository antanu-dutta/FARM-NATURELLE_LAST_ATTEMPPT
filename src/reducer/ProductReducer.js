const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_SHOP_BY_CONCERN": {
      return {
        ...state,
        shopByConcernProducts: action.payload
      }
    }
  }
  return state
}

export default ProductReducer