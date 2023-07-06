import { WatchlistPropTypes } from '../../PropTypes/WatchlistPropTypes';
import {getCustomer} from "../getCustomer";

type Variables = {
    first: 10,
    page: 1,
    input?: WatchlistPropTypes
  };

export async function getWishlist(context, params) {
  const variables: Variables = {
    first: params?.itemsPerPage || 10,
    page: params?.page || 1,
    input: params?.input
  };

    const { data } = await getCustomer(context, params.token);
    return data.favorite;
}
