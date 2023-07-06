import {
  Context,
  useUserBillingFactory,
  UseUserBillingFactoryParams,
} from '@vue-storefront/core';
import type {
  UserBillingAddress as Address,
  UserBillingAddressItem as AddressItem,
} from '@vue-storefront/myshop-api';
const userdata={
  attributes:{
    'customer.id': null,
    'customer.salutation': "",
    'customer.profile_pic': "",
    'customer.company': "",
    'customer.vatid': "",
    'customer.title': "",
    'customer.firstname': "",
    'customer.lastname': "",
    'customer.address1': "",
    'customer.address2': "",
    'customer.address3': "",
    'customer.postal': "",
    'customer.city': "",
    'customer.state': "",
    'customer.languageid': "",
    'customer.countryid': "",
    'customer.telephone': "",
    'customer.email': "",
    'customer.telefax': "",
    'customer.website': "",
    'customer.label': "",
    'customer.code': "",
    'customer.birthday': "",
    'customer.status': 0,
  }
}
const params: UseUserBillingFactoryParams<Address, AddressItem> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addAddress: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.addAddress');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteAddress: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.deleteAddress');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateAddress: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.updateAddress');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.load');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDefaultAddress: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.setDefaultAddress');
    return userdata;
  },
};

export const useUserBilling = useUserBillingFactory<Address, AddressItem>(
  params
);
