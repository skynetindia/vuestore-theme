import {customerRegisterPropTypes} from '../../PropTypes/CustomerPropTypes';

type Variables = {
    input?: customerRegisterPropTypes;
  };

export async function createCustomer(context, params) {
  const inputFilters = {
    "attributes": {
      "customer.code": params.code,
      "customer.firstname": params.first_name,
      "customer.lastname": params.last_name,
      "customer.telephone": params.phone,
      "customer.email": params.email,
      "customer.password": params.password
    }
  };

  const variables: Variables = {
    input: inputFilters
  };
  const url = new URL("jsonapi/customer",context.config.api.url);
  try {
    return await context.client.post(url,variables);
  } catch (error) {
    console.log('Error customerRegister:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
