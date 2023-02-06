export async function getCart(context, params) {
  const url = new URL('/jsonapi/basket', context.config.api.url);
  try {
    return context.client.get(url.href)
  } catch (error) {
    console.log('Error getCart:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
