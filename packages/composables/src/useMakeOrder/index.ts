import {
  Context,
  useMakeOrderFactory,
  UseMakeOrderFactoryParams,
} from '@vue-storefront/core';
import type { Order } from '@vue-storefront/myshop-api';
import {OrderBaseAddressAttributesTypes, OrderBaseProductPropTypes, OrderBaseServicePropTypes} from "@vue-storefront/myshop-api/lib/PropTypes/OrderPropTypes";

const factoryParams: UseMakeOrderFactoryParams<Order> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  make: async (context: Context, { customQuery }) => {
    console.log('Mocked: useMakeOrder.make');
    return {
      'id': "",
      'attributes': {
        'order.id': "",
        'order.type': "",
        'order.statusdelivery': 0,
        'order.statuspayment': 0,
        'order.datepayment': "",
        'order.datedelivery': "",
        'order.relatedid': "",
        'order.base.id': "",
        'order.base.sitecode': "",
        'order.base.customerid': "",
        'order.base.languageid': "",
        'order.base.currencyid': "",
        'order.base.price': "",
        'order.base.costs': "",
        'order.base.rebate': "",
        'order.base.taxvalue': "",
        'order.base.taxflag': false,
        'order.base.customerref': "",
        'order.base.comment': "",
        'order.ctime':new Date(),
        'rewards_earned': "",
        'reward_cost': "",
        'user_group': "",
        product: [{
          'order.base.product.costs': "",
          'order.base.product.description': "",
          'order.base.product.id': "",
          'order.base.product.mediaurl': "",
          'order.base.product.name': "",
          'order.base.product.position': 0,
          'order.base.product.price': "",
          'order.base.product.prodcode': "",
          'order.base.product.productid': "",
          'order.base.product.quantity': 1,
          'order.base.product.rebate': "",
          'order.base.product.status': 1,
          'order.base.product.stocktype': "",
          'order.base.product.suppliercode': "",
          'order.base.product.taxrate': "",
          'order.base.product.taxrates': {
            'tax': ""
          },
          'order.base.product.taxvalue': "",
          'order.base.product.timeframe': "",
          'order.base.product.type': ""
        }],
        address: [{
          'order.base.address.address1': "",
          'order.base.address.address2': "",
          'order.base.address.address3': "",
          'order.base.address.addressid': "",
          'order.base.address.birthday': "",
          'order.base.address.city': "",
          'order.base.address.company': "",
          'order.base.address.countryid': "",
          'order.base.address.email': "",
          'order.base.address.firstname': "",
          'order.base.address.id': "",
          'order.base.address.languageid': "",
          'order.base.address.lastname': "",
          'order.base.address.latitude': null,
          'order.base.address.longitude': null,
          'order.base.address.position': 0,
          'order.base.address.postal': "",
          'order.base.address.salutation': "",
          'order.base.address.state': "",
          'order.base.address.telefax': "",
          'order.base.address.telephone': "",
          'order.base.address.title': "",
          'order.base.address.type': "",
          'order.base.address.vatid': "",
          'order.base.address.website': "",
        }],
        coupon: [""],
        service: [{ 'order.base.service.code': "",
          'order.base.service.costs': "",
          'order.base.service.id': "",
          'order.base.service.mediaurl': "",
          'order.base.service.name': "",
          'order.base.service.position': 0,
          'order.base.service.price': "",
          'order.base.service.rebate': "",
          'order.base.service.serviceid': "",
          'order.base.service.taxrate': "",
          'order.base.service.taxrates': "",
          'order.base.service.type': "",
          'order.base.service.taxvalue': ""
        }],
      }
    };
  },
};

export const useMakeOrder = useMakeOrderFactory<Order>(factoryParams);
