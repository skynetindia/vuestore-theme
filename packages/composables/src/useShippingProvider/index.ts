import {
  useShippingProviderFactory,
  UseShippingProviderParams,
  Context,
} from '@vue-storefront/core';
import type {
  ShippingProvider,
  ShippingMethod,
} from '@vue-storefront/myshop-api';

const params: UseShippingProviderParams<ShippingProvider, ShippingMethod> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: loadShippingProvider');
    return {
      'service.id': "",
      'service.type': "",
      'service.code': "",
      'service.dateend': "",
      'service.datestart': "",
      'service.label': "",
      'service.position': 0,
      'service.provider': "",
      'service.status': 0,
      'price': {
        'price.costs': "",
        'price.currencyid': "",
        'price.domain': "",
        'price.id': "",
        'price.label': "",
        'price.quantity': 1,
        'price.rebate': "",
        'price.status': 0,
        'price.taxflag': false,
        'price.taxrate': "",
        'price.taxvalue': "",
        'price.type': "",
        'price.value': ""
      },
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingMethod, customQuery }) => {
    console.log('Mocked: saveShippingProvider');
    return {
      'service.id': "",
      'service.type': "",
      'service.code': "",
      'service.dateend': "",
      'service.datestart': "",
      'service.label': "",
      'service.position': 0,
      'service.provider': "",
      'service.status': 0,
      'price': {
        'price.costs': "",
        'price.currencyid': "",
        'price.domain': "",
        'price.id': "",
        'price.label': "",
        'price.quantity': 1,
        'price.rebate': "",
        'price.status': 0,
        'price.taxflag': false,
        'price.taxrate': "",
        'price.taxvalue': "",
        'price.type': "",
        'price.value': ""
      },
    };
  },
};

export const useShippingProvider = useShippingProviderFactory<
  ShippingProvider,
  ShippingMethod
>(params);
