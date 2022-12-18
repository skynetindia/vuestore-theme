// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const enhanceProduct = (productResponse: Array<any>) => {
  if (Object.keys(productResponse).length === 0) return [];

  let products = [];
  if (Array.isArray(productResponse)) {
    products = productResponse.filter(item => Object.keys(item).length !== 0);
  }

  const enhancedProductResponse = products.map((product) => ({
    ...product,
    name: product.attributes["product.label"],
    coverImage: product.media[0]["media.label"],
    regularPrice: parseInt(product?.price[0]["price.value"]),
    discountPrice: parseInt(product?.price[0]["price.rebate"])
  }));

  return enhancedProductResponse;
};

export default enhanceProduct;
