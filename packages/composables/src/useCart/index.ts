import {
  Context,
  useCartFactory,
  UseCartFactoryParams,
} from '@vue-storefront/core';
import type { Cart, CartItem, Product } from '@vue-storefront/myshop-api';

const params: UseCartFactoryParams<Cart, CartItem, Product> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: useCart.load');
    return context.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (
    context: Context,
    { currentCart, product, quantity, customQuery }
  ) => {
    console.log('Mocked: useCart.addItem');
    return context.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (
    context: Context,
    { currentCart, product, customQuery }
  ) => {
    console.log('Mocked: useCart.removeItem');
    return context.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (
    context: Context,
    { currentCart, product, quantity, customQuery }
  ) => {
    console.log('Mocked: useCart.updateItemQty');
    return context.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentCart }) => {
    console.log('Mocked: useCart.clear');
    return context.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    console.log('Mocked: useCart.applyCoupon');
    return {
      updatedCart: context.data,
      updatedCoupon: couponCode,
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    console.log('Mocked: useCart.removeCoupon');
    return {
      updatedCart: context.data,
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    console.log('Mocked: useCart.isInCart');
    return false;
  },
};

export const useCart = useCartFactory<Cart, CartItem, Product>(params);
