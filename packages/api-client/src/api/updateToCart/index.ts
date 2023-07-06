type Variables = {
    input: {
        "attributes": {
            "quantity": number
        }
    };
  };

export async function updateToCart(context, params) {

    const url = new URL(`jsonapi/basket?id=default&related=product&relatedid=${params.relatedid}&_token=${params.csrf}`, context.config.api.url);

    const inputData = {
        "attributes": {
            "quantity": params.quantity
        }
    }
    const variables: Variables = {
        input: inputData
    };
  try {
      return await context.client.patch(url,variables);
  } catch (error) {
    console.log('Error updateToCart:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
