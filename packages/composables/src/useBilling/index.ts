import {
  Context,
  useBillingFactory,
  UseBillingParams,
} from '@vue-storefront/core';
import type { BillingAddress } from '@vue-storefront/myshop-api';
import type { UseBillingAddParams as AddParams } from '../types';

const params: UseBillingParams<BillingAddress, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: useBilling.load',context);
    return {
      "id":"",
      "attributes": {
        'order.base.address.addressid': "",
        'order.base.address.salutation': "",
        'order.base.address.company': "",
        'order.base.address.vatid': "",
        'order.base.address.title': "",
        'order.base.address.firstname': "",
        'order.base.address.lastname': "",
        'order.base.address.address1': "",
        'order.base.address.address2': "",
        'order.base.address.address3': "",
        'order.base.address.postal': "",
        'order.base.address.city': "",
        'order.base.address.state': "",
        'order.base.address.countryid': "",
        'order.base.address.languageid': "",
        'order.base.address.telephone': "",
        'order.base.address.telefax': "",
        'order.base.address.email': "",
        'order.base.address.website': "",
        'order.base.address.longitude': "",
        'order.base.address.latitude': null
      }
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { params, billingDetails, customQuery }) => {
    console.log('Mocked: useBilling.save');
    return {
      "id":"",
      "attributes": {
        'order.base.address.addressid': "",
        'order.base.address.salutation': "",
        'order.base.address.company': "",
        'order.base.address.vatid': "",
        'order.base.address.title': "",
        'order.base.address.firstname': "",
        'order.base.address.lastname': "",
        'order.base.address.address1': "",
        'order.base.address.address2': "",
        'order.base.address.address3': "",
        'order.base.address.postal': "",
        'order.base.address.city': "",
        'order.base.address.state': "",
        'order.base.address.countryid': "",
        'order.base.address.languageid': "",
        'order.base.address.telephone': "",
        'order.base.address.telefax': "",
        'order.base.address.email': "",
        'order.base.address.website': "",
        'order.base.address.longitude': "",
        'order.base.address.latitude': null
      }
    };
  },
};

export const useBilling = useBillingFactory<BillingAddress, AddParams>(params);
