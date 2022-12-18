import {CustomerAddressAttributePropTypes} from '../../PropTypes/CustomerPropTypes';

type Variables = {
    input: CustomerAddressAttributePropTypes;
  };

export async function createAddress(context, params) {
  const inputFilters = {
    'customer.address.salutation': params.value.salutation,
    'customer.address.company': params.value.company,
    'customer.address.vatid':  params.value.vatid,
    'customer.address.title':  params.value.title,
    'customer.address.firstname':  params.value.firstname,
    'customer.address.lastname':  params.value.lastname,
    'customer.address.address1':  params.value.address1,
    'customer.address.address2':  params.value.address2,
    'customer.address.address3':  params.value.address3,
    'customer.address.postal':  params.value.postal,
    'customer.address.city':  params.value.city,
    'customer.address.state':  params.value.state,
    'customer.address.countryid':  params.value.countryid,
    'customer.address.languageid':  params.value.languageid,
    'customer.address.telephone':  params.value.telephone,
    'customer.address.telefax':  params.value.telefax,
    'customer.address.email':  params.value.email,
    'customer.address.website':  params.value.website,
    'customer.address.longitude':  params.value.longitude,
    'customer.address.latitude': params?.value?.latitude,
    'customer.address.id':  params.value.id,
  };

  const variables: Variables = {
    input: inputFilters
  };

  if (params?.value?.defaultAddress) {
    variables.input.defaultAddress = params?.value?.defaultAddress;
  }
  const url= new URL('jsonapi/customer?related=address',context.config.api.url);
  try {
    return await context.client.post(url,variables);
     ;
  } catch (error) {
    console.log('Error createAddress:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
