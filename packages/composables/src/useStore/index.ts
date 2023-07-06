import { Store } from '@vue-storefront/myshop-api';
import { Context, useStoreFactory } from '@vue-storefront/core';

export const useStore = useStoreFactory<Store>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load(context: Context, params) {
    console.log('Mocked: useStore.load');

    return Promise.resolve({
      isLoading: false,
      toastMessage: "",
      isLoggedIn: false,
      user: {
        'data': [
          {
            'id': 0,
            'type': 0,
            'name': "",
            'email': "",
            'phone': "",
            'media': "",
          }
        ]
      },
      cartItems: 0,
      wishlistItems: 0,
      couponCode: null ,
      currency: null,
      currencySymbol: null,
      languageCode:null,
      language: null,
      csrf: null,
      darkMode: false
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  change(context: Context, params) {
    console.log('Mocked: useStore.change');

    return Promise.resolve({
      isLoading: false,
      toastMessage: "",
      isLoggedIn: false,
      user: {
        'data': [
          {
            'id': 0,
            'type': 0,
            'name': "",
            'email': "",
            'phone': "",
            'media': "",
          }
        ]
      },
      cartItems: 0,
      wishlistItems: 0,
      couponCode: null ,
      currency: null,
      currencySymbol: null,
      languageCode:null,
      language: null,
      csrf: null,
      darkMode: false
    });
  },
});
