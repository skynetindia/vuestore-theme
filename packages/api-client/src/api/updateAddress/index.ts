
import { CustomerAddressAttributePropTypes } from '../../PropTypes/CustomerPropTypes';

type Variables = {
    id: null,
    input: CustomerAddressAttributePropTypes;
  };

export async function updateAddress(context, params) {
  const inputFilters = {
    'customer.address.salutation': params?.value?.salutation,
    'customer.address.company': params?.value?.companyName,
    'customer.address.vatid': params?.value?.vatId,
    'customer.address.title': params?.value?.title,
    'customer.address.firstname': params?.value?.firstname,
    'customer.address.lastname': params?.value?.lastname,
    'customer.address.address1': params?.value?.address1,
    'customer.address.address2': params?.value?.address2,
    'customer.address.address3': params?.value?.address3,
    'customer.address.postal': params?.value?.postal,
    'customer.address.city': params?.value?.city,
    'customer.address.state': params?.value?.state,
    'customer.address.countryid': params?.value?.countryid,
    'customer.address.languageid': params?.value?.languageid,
    'customer.address.telephone': params?.value?.telephone,
    'customer.address.telefax': params?.value?.telefax,
    'customer.address.email': params?.value?.email,
    'customer.address.website': params?.value?.website,
    'customer.address.longitude': params?.value?.longitude,
    'customer.address.latitude': params?.value?.latitude,
    'customer.address.id': params?.value?.id,
    "defaultAddress":params?.value?.defaultAddress
  };

  const variables: Variables = {
    id: params?.value?.id,
    input: inputFilters
  };

  const url = new URL(`/jsonapi/customer?_token=${params.csrf}`, context.config.api.url);
  try {
  return await context.client.post(url,variables)
  } catch (error) {
    console.log('Error updateAddress:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
