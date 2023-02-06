import { OrderPropTypes } from '../../PropTypes/OrderPropTypes';

type Variables = {
    first: 10,
    page: 1,
    input?: OrderPropTypes
  };

export async function getOrderList(context, params) {

  const variables: Variables = {
    first: params?.itemsPerPage || 10,
    page: params?.page || 1,
    input: params?.input
  };
    const url = new URL('/jsonapi/order?include=order/base,order/base/address,order/base/coupon,order/base/product,order/base/service', context.config.api.url);
  try {
    return   context.client.post(url.href);;
  } catch (error) {
    console.log('Error getOrderList:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
