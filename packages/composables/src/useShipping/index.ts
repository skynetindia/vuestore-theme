import {
  Context,
  useShippingFactory,
  UseShippingParams,
} from '@vue-storefront/core';
import type { ShippingAddress } from '@vue-storefront/myshop-api';
import type { UseShippingAddParams as AddParams } from '../types';

const params: UseShippingParams<ShippingAddress, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: useShipping.load');
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
  save: async (context: Context, { shippingDetails, customQuery }) => {
    console.log('Mocked: useShipping.save');
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

export const useShipping = useShippingFactory<ShippingAddress, AddParams>(
  params
);
