import { OrderBaseServicePropTypes } from '../../PropTypes/OrderPropTypes';

type Variables = {
    input: OrderBaseServicePropTypes;
};

export async function saveShippingMethod(context, params) {
  const variables: Variables = {
    input: params
  };
    const url = new URL(`josnapi/basket?id=default&related=service&relatedid=payment&_token=${params.csrf}`, context.config.api.url);
  try {
      context.client.post(url,variables)

  } catch (error) {
    console.log('Error saveShippingMethod:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
