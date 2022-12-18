import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { Product, ProductFilter } from '@vue-storefront/myshop-api';
import { enhanceProduct } from 'src/internals';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: Product): string {
  return product?.attributes["product.label"] || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: Product): string {
  return 'slug';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: Product): AgnosticPrice {
  return {
    regular: parseInt(product?.price[0]["price.value"]) || 0,
    special: parseInt(product?.price[0]["price.rebate"]) || 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  return [
    {
      small:
        'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg',
      normal:
        'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg',
      big: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg',
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: Product): string {
  return product?.media[0]["media.label"];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  if (!products) {
    return [];
  }
  products = Array.isArray(products) ? products : [products];
  return (Object.keys(products).length > 0 ? enhanceProduct(products) : []);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  products: Product[] | Product,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filterByAttributeName?: string[]
): Record<string, AgnosticAttribute | string> {
  return {};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: Product): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: Product): string {
  return '1';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return 0;
}

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating
};
