import { ReviewSearchPropTypes } from '../../PropTypes/ReviewPropTypes';

type Variables = {
  first: 10,
  page: 1,
  input?: ReviewSearchPropTypes,
};
export async function searchReviews(context, params) {

  const variables: Variables = {
    first: params?.itemsPerPage || 10,
    page: params?.page || 1,
    input: params?.input
  };
  const searchParams = new URLSearchParams();
  variables.input['f_refid'] && searchParams.append("filter[f_refid]", variables.input['f_refid']);
  variables.input['f_domain'] && searchParams.append("filter[f_domain]", variables.input['f_domain']);
  const url = new URL(`/jsonapi/review${searchParams.toString() && `?${searchParams.toString()}`}`, context.config.api.url);

  try {
    return await context.client.get(url);
  } catch (error) {
    console.log('Error searchReviews:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
