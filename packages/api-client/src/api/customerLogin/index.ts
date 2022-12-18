import {LoginInput} from '../../PropTypes/CustomerPropTypes';

type Variables = {
    input?: LoginInput;
  };

export async function customerLogin(context, params) {
  const inputFilters = {
    email: params.email,
    password: params.password,
    islogin: params.remember || false
  };

  const variables: Variables = {
    input: inputFilters
  };
  const url=new URL("/jsonapi/user",context.config.api.url);
  try {
    return await context.client.post(url,variables);
  } catch (error) {
    console.log('Error customerLogin:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
