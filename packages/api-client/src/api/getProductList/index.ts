
export async function getProductList(context, params) {
  const inputFilters = params?.input?.filters || {};
  inputFilters.categorySlug = params?.input?.categorySlug || '';

  try {
        return  // Create URL object containing full endpoint URL
      const url = new URL('/jsonapi/product?filter[f_catid]=[15]', context.config.api.url);

      // Use axios to send a GET request
      const { data } = await context.client.get(url.href);
      // Return data from the API
      return data.data;;
  } catch (error) {
    console.log('Error getProductList:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
