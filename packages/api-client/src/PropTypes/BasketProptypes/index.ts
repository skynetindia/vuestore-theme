export interface BasketProductPropTypes {
    type: any,
    id: number,
    productId?:any,
    quantity?:any,
    selectedConfigurableOption?:any,
    superAttribute?:any,
    attributes?: {
        'order.base.product.id': string,
        'order.base.product.price': string,
        'order.base.product.costs': string,
        'order.base.product.rebate': string,
        'order.base.product.taxrate': string,
        'order.base.product.taxrates': {
            'tax'?: string
        },
        'order.base.product.type': string,
        'order.base.product.stocktype': string,
        'order.base.product.suppliercode': string,
        'order.base.product.prodcode': string,
        'order.base.product.productid': string,
        'order.base.product.quantity': number,
        'order.base.product.name': string,
        'order.base.product.description': string,
        'order.base.product.mediaurl': string,
        'order.base.product.timeframe': string,
        'order.base.product.position': number,
        'order.base.product.status': number
    }
}
export interface BasketDeliveryPropTypes {
    id: 'delivery',
    type: 'basket/service',
    attributes: {
        'order.base.service.code': string,
        'order.base.service.costs': string,
        'order.base.service.currencyid': string,
        'order.base.service.id': string | null,
        'order.base.service.mediaurl': string,
        'order.base.service.name': string,
        'order.base.service.position': string | null,
        'order.base.service.price': string,
        'order.base.service.rebate': string,
        'order.base.service.serviceid': string,
        'order.base.service.taxflag': boolean
        'order.base.service.taxrate': string,
        'order.base.service.taxrates': { 'tax'?: string }
        'order.base.service.taxvalue': string,
        'order.base.service.type': 'delivery'
    }
}
export interface BasketPaymentPropTypes {
    id: 'payment',
    type: 'basket/service',
    attributes: {
        'order.base.service.code': string,
        'order.base.service.costs': string,
        'order.base.service.currencyid': string,
        'order.base.service.id': string | null,
        'order.base.service.mediaurl': string,
        'order.base.service.name': string,
        'order.base.service.position': string | null,
        'order.base.service.price': string,
        'order.base.service.rebate': string,
        'order.base.service.serviceid': string,
        'order.base.service.taxflag': boolean
        'order.base.service.taxrate': string,
        'order.base.service.taxrates': { 'tax'?: string }
        'order.base.service.taxvalue': string,
        'order.base.service.type': 'payment'
    }
}
export interface BasketCouponPropTypes {
    id: string,
    type: 'basket/coupon'
}

export interface SavedBasketServicePropTypes {
    id: string,
    type: string,
    attributes: {
        'order.base.service.code': string,
        'order.base.service.costs': string,
        'order.base.service.currencyid': string,
        'order.base.service.id': string | null,
        'order.base.service.mediaurl': string,
        'order.base.service.name': string,
        'order.base.service.position': string | null,
        'order.base.service.price': string,
        'order.base.service.rebate': string,
        'order.base.service.serviceid': string,
        'order.base.service.taxflag': boolean
        'order.base.service.taxrate': string,
        'order.base.service.taxrates': { 'tax'?: string }
        'order.base.service.taxvalue': string,
        'order.base.service.type': 'delivery'
    }
}

export interface SavedBasketPropTypes {
    'data': {
        id: string,
        'attributes': {
            'order.base.comment': string,
            'order.base.costs': string,
            'order.base.currencyid': string,
            'order.base.customerid': string,
            'order.base.customerref': string,
            'order.base.id': string,
            'order.base.languageid': string,
            'order.base.price': string,
            'order.base.rebate': string,
            'order.base.sitecode': string,
            'order.base.taxflag': boolean
            'order.base.taxvalue': string,
        }
    },
    'included': SavedBasketServicePropTypes[]
}

export interface BasketAddressPropTypes {
    'id': string,
    'attributes': {
        'order.base.address.addressid': string,
        'order.base.address.salutation': string,
        'order.base.address.company': string,
        'order.base.address.vatid': string,
        'order.base.address.title': string,
        'order.base.address.firstname': string,
        'order.base.address.lastname': string,
        'order.base.address.address1': string,
        'order.base.address.address2': string,
        'order.base.address.address3': string,
        'order.base.address.postal': string,
        'order.base.address.city': string,
        'order.base.address.state': string,
        'order.base.address.countryid': string,
        'order.base.address.languageid': string,
        'order.base.address.telephone': string,
        'order.base.address.telefax': string,
        'order.base.address.email': string,
        'order.base.address.website': string,
        'order.base.address.longitude': string | number | null,
        'order.base.address.latitude': string | number | null
    }
}

export interface BasketPropTypes {
    'data': {
        id: string,
    }
    'attributes': {
        'order.base.comment': string,
        'order.base.costs': string,
        'order.base.currencyid': string,
        'order.base.customerid': string,
        'order.base.customerref': string,
        'order.base.id': string,
        'order.base.languageid': string,
        'order.base.price': string,
        'order.base.rebate': string,
        'order.base.sitecode': string,
        'order.base.taxflag': boolean
        'order.base.taxvalue': string,
    }
    'included': {
        [key: string]: {
            id: number | string,
            type: string,
            attributes: BasketProductPropTypes | BasketPaymentPropTypes | BasketDeliveryPropTypes | BasketCouponPropTypes
        }
    }
}
