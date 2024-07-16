export const filterAndSortProducts = (products, id, sortOption) => {
  // Filter products based on the category id
  const filteredProduct = products.filter(
    (curProduct) => curProduct.category.toLowerCase().replace(/\s+/g, "") === id
  );

  let sortedProducts = [];
  if (id === "all-product") {
    sortedProducts = [...products];
  } else {
    sortedProducts = [...filteredProduct];
  }

  // Sort products based on the sortOption
  switch (sortOption) {
    case "a-z":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-a":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "low-high":
      sortedProducts.sort(
        (a, b) => a.variety[0].discountedPrice - b.variety[0].discountedPrice
      );
      break;
    case "high-low":
      sortedProducts.sort(
        (a, b) => b.variety[0].discountedPrice - a.variety[0].discountedPrice
      );
      break;
    case "new-old":
      sortedProducts.sort(
        (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
      ); // Assuming dateAdded field exists
      break;
    case "old-new":
      sortedProducts.sort(
        (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
      ); // Assuming dateAdded field exists
      break;
    default:
      break;
  }

  return sortedProducts;
};
