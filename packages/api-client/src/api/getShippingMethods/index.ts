export async function getShippingMethods(context, params) {
  const url= new URL('/jsonapi/service?filter[cs_type]=delivery&include=text,price,media');
  try {
    return context.client.get(url.href)
  } catch (error) {
    console.log('Error getShippingMethods:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
