import {CustomerAttributePropTypes} from "../../PropTypes/CustomerPropTypes";

type Variables = {
    input?: CustomerAttributePropTypes;
  };

export async function customerUpdate(context, params) {
  const inputFilters = {
    'customer.id': null,
    'customer.salutation': params?.firstName,
    'customer.profile_pic': params?.profile_pic,
    'customer.company': params?.company,
    'customer.vatid': params?.vatid,
    'customer.title': params?.title,
    'customer.firstname': params?.firstName,
    'customer.lastname': params?.lastname,
    'customer.address1': params?.address1,
    'customer.address2': params?.address2,
    'customer.address3': params?.address3,
    'customer.postal': params?.postal,
    'customer.city': params?.city,
    'customer.state': params?.state,
    'customer.languageid': params?.languageid,
    'customer.countryid': params?.countryid,
    'customer.telephone': params?.telephone,
    'customer.email': params?.email,
    'customer.telefax': params?.telefax,
    'customer.website': params?.website,
    'customer.label': params?.firstName,
    'customer.code': params?.code,
    'customer.birthday': params?.dateOfBirth,
    'customer.status': params?.status
  };

  const variables: Variables = {
    input: inputFilters
  };
  const url=new URL("/jsonapi/customer",context.config.api.url);
  try {
    return context.client.post(url,variables);
  } catch (error) {
    console.log('Error customerUpdate:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
