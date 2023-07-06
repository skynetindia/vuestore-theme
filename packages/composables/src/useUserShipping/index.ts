import {
  Context,
  useUserShippingFactory,
  UseUserShippingFactoryParams,
} from '@vue-storefront/core';
import type {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem,
} from '@vue-storefront/myshop-api';
const userdata={
  "attributes":{
    'customer.address.salutation': "",
    'customer.address.company': "",
    'customer.address.vatid': "",
    'customer.address.title': "",
    'customer.address.firstname': "",
    'customer.address.lastname': "",
    'customer.address.address1': "",
    'customer.address.address2': "",
    'customer.address.address3': "",
    'customer.address.postal': "",
    'customer.address.city': "",
    'customer.address.state': "",
    'customer.address.countryid': "",
    'customer.address.languageid': "",
    'customer.address.telephone': "",
    'customer.address.telefax': "",
    'customer.address.email': "",
    'customer.address.website': "",
    'customer.address.longitude': 0,
    'customer.address.latitude': 0,
    'customer.address.id': ""
  }

}

const params: UseUserShippingFactoryParams<Address, AddressItem> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.addAddress');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.deleteAddress');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.updateAddress');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.load');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDefaultAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.setDefaultAddress');
    return userdata;
  },
};

export const useUserShipping = useUserShippingFactory<Address, AddressItem>(
  params
);
