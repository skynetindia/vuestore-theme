import {WatchlistPropTypes} from '../../PropTypes/WatchlistPropTypes';

type Variables = {
    input: {
      action:string,
      proudctId:any
    };
  };

export async function addToWishlist(context, params) {
  const inputFilters = {
    action:"add",
    proudctId: params?.id
  };
  const variables: Variables = {
    input: inputFilters
  };
  const url = new URL('/jsonapi/customer', context.config.api.url);
  try {
    return await context.client.patch(url,variables)

  } catch (error) {
    console.log('Error addToWishlist:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
