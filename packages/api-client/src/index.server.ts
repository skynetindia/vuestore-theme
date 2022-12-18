import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
import axios from 'axios';
import { getFeaturedProduct } from './api/featuredProducts';
import { getNewProduct } from './api/newProducts';
function onCreate(settings) {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client: client
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    getFeaturedProduct,
    getNewProduct
  }
});

export {
  createApiClient
};
