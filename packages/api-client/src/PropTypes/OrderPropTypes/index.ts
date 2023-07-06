export interface OrderBaseAddressAttributesTypes {
    'order.base.address.address1': string,
    'order.base.address.address2': string,
    'order.base.address.address3': string,
    'order.base.address.addressid': string,
    'order.base.address.birthday': string | null,
    'order.base.address.city': string,
    'order.base.address.company': string,
    'order.base.address.countryid': string,
    'order.base.address.email': string,
    'order.base.address.firstname': string,
    'order.base.address.id': string,
    'order.base.address.languageid': string,
    'order.base.address.lastname': string,
    'order.base.address.latitude': string | null,
    'order.base.address.longitude': string | null,
    'order.base.address.position': number,
    'order.base.address.postal': string,
    'order.base.address.salutation': string,
    'order.base.address.state': string,
    'order.base.address.telefax': string,
    'order.base.address.telephone': string,
    'order.base.address.title': string,
    'order.base.address.type': string,
    'order.base.address.vatid': string,
    'order.base.address.website': string,
}
export interface OrderBaseAddressTypes {
    id: string,
    attributes: OrderBaseAddressAttributesTypes
}
export interface OrderBaseProductPropTypes {
    'order.base.product.costs': string,
    'order.base.product.description': string,
    'order.base.product.id': string,
    'order.base.product.mediaurl': string,
    'order.base.product.name': string,
    'order.base.product.position': number,
    'order.base.product.price': string,
    'order.base.product.prodcode': string,
    'order.base.product.productid': string,
    'order.base.product.quantity': number,
    'order.base.product.rebate': string,
    'order.base.product.status': number
    'order.base.product.stocktype': string,
    'order.base.product.suppliercode': string,
    'order.base.product.taxrate': string,
    'order.base.product.taxrates': {
        'tax'?: string
    },
    'order.base.product.taxvalue': string,
    'order.base.product.timeframe': string,
    'order.base.product.type': string
}
export interface OrderBaseServicePropTypes {
    'order.base.service.code': string,
    'order.base.service.costs': string,
    'order.base.service.id': string,
    'order.base.service.mediaurl': string,
    'order.base.service.name': string,
    'order.base.service.position': number|string,
    'order.base.service.price': string,
    'order.base.service.rebate': string,
    'order.base.service.serviceid': string,
    'order.base.service.taxrate': string,
    'order.base.service.taxrates': any,
    'order.base.service.type': string,
    'order.base.service.taxvalue': string
}
export interface OrderBaseServiceTypes {
    id: string,
    attributes: OrderBaseServicePropTypes,
    types?:string
}
interface OrderAttributePropTypes {
    'order.id': string,
    'order.type': string,
    'order.statusdelivery': number,
    'order.statuspayment': number,
    'order.datepayment': string,
    'order.datedelivery': string | null,
    'order.relatedid': string | null,
    'order.base.id': string,
    'order.base.sitecode': string,
    'order.base.customerid': string,
    'order.base.languageid': string,
    'order.base.currencyid': string,
    'order.base.price': string,
    'order.base.costs': string,
    'order.base.rebate': string,
    'order.base.taxvalue': string,
    'order.base.taxflag': boolean,
    'order.base.customerref': string,
    'order.base.comment': string,
    'order.ctime': Date,
    'rewards_earned': string,
    'reward_cost': string,
    'user_group': string | null,
    product?: OrderBaseProductPropTypes[],
    address?: OrderBaseAddressAttributesTypes[],
    coupon?: string[],
    service?: OrderBaseServicePropTypes[],
}

export interface OrderPropTypes {
    'id': string,
    'attributes': OrderAttributePropTypes,
}
export interface MakeOrderPropTypes{
        "attributes": {
            "order.baseid": string,
            "order.statusdelivery": string,
            "order.statuspayment": string,
            "transaction": ServiceOrderTypes[]
        }
}
export interface ServiceOrderTypes{
    "transaction_type": string,
    "transaction_code": string,
    "transaction_value": string,
    "transaction_name": string,
    "order_service_id": string
}
