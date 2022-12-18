import { CategoryPropTypes } from './PropTypes/CategoryPropTypes';
import { BasketPropTypes, BasketProductPropTypes, BasketCouponPropTypes, BasketAddressPropTypes } from './PropTypes/BasketProptypes';
import { OrderPropTypes, OrderBaseProductPropTypes } from './PropTypes/OrderPropTypes';
import { ProductPropTypes, ProductAttributePropTypes } from './PropTypes/ProductPropTypes';
import { ShippingProviderProp, DeliveryMethodPropTypes } from './PropTypes/DeliveryMethodPropTypes';
import { StoreProptypes } from './PropTypes/StoreProptypes';
import { WatchlistPropTypes } from './PropTypes/WatchlistPropTypes';
import { ReviewPropTypes, ReviewAttributePropTypes } from './PropTypes/ReviewPropTypes';
import { CustomerPropTypes, CustomerAddressPropTypes } from './PropTypes/CustomerPropTypes';

export type TODO = unknown;

export type Setttings = TODO;

export type Endpoints = TODO;

export type BillingAddress = BasketAddressPropTypes;

export type Cart = BasketPropTypes;

export type CartItem = BasketProductPropTypes;

export type Category = CategoryPropTypes;

export type Coupon = BasketCouponPropTypes;

export type Facet = TODO;

export type FacetSearchCriteria = TODO;

export type Order = OrderPropTypes;

export type OrderItem = OrderBaseProductPropTypes;

export type PasswordResetResult = TODO;

export type Product = ProductPropTypes;

export type ProductFilter = TODO;

export type Review = ReviewPropTypes;

export type ReviewItem = ReviewAttributePropTypes;

export type User = CustomerPropTypes;

export type UserBillingAddress = CustomerPropTypes;

export type UserBillingAddressItem = CustomerAddressPropTypes;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = CustomerAddressPropTypes;

export type UserShippingAddressItem = CustomerAddressPropTypes;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = BasketAddressPropTypes;

export type ShippingMethod = DeliveryMethodPropTypes;

export type ShippingProvider = ShippingProviderProp;

export type Store = StoreProptypes;

export type Wishlist = WatchlistPropTypes;

export type WishlistItem = ProductAttributePropTypes;
