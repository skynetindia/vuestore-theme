
import { CustomerAddressAttributePropTypes } from '../../PropTypes/CustomerPropTypes';

type Variables = {
    input: CustomerAddressAttributePropTypes;
  };

export async function saveShippingAddress(context, params) {
  const variables: Variables = {
    input: params
  };
  const url = `jsonapi/customer?related=address&_token=${params.csrf}`;
  try {
      return await context.client.post(url,variables);
  } catch (error) {
    console.log('Error saveShippingAddress:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
