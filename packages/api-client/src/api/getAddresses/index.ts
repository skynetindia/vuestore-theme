export async function getAddresses(context, params) {
  const url = new URL('/jsonapi/customer?related=address&_token=', context.config.api.url);
  try {
    await context.client.get(url.href)
  } catch (error) {
    console.log('Error getAddresses:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
