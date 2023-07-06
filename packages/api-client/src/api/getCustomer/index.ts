export async function getCustomer(context, customerToken) {
  const url = new URL(`/jsonapi/customer?_token=${customerToken}`, context.config.api.url);
  try {
    return context.client.get(url.href);
  } catch (error) {
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
