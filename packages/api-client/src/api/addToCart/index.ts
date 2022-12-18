
import { CartItem } from '../../types';

type Variables = {
    input: CartItem;
  };

export async function addToCart(context, params) {
  const inputFilters = {
    productid: params?.product?.id,
    quantity: params?.quantity
  };

  const variables: Variables = {
    input: inputFilters
  };


  const url = new URL('/jsonapi/basket?id=default&related=product', context.config.api.url);
  try {
    const { data } = await context.client.post(url,{variables});
    return data.data;
  } catch (error) {
    console.log('Error addToCart:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
