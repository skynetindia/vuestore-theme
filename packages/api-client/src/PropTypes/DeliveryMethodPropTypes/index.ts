interface PricePropTypes {
    'price.costs': string,
    'price.currencyid': string,
    'price.domain': string,
    'price.id': string,
    'price.label': string,
    'price.quantity': number,
    'price.rebate': string,
    'price.status': number,
    'price.taxflag': boolean,
    'price.taxrate': string,
    'price.taxvalue': string,
    'price.type': string,
    'price.value': string
}
export interface DeliveryMethodImagePropTypes {
    'id': string,
    'type': 'media',
    'attributes': {
        'media.id': string,
        'media.filesystem': string,
        'media.domain': string,
        'media.label': string,
        'media.languageid': null | string,
        'media.mimetype': string,
        'media.type': string,
        'media.preview': string,
        'media.previews': string[],
        'media.url': string,
        'media.status': number
    }
}

interface ServiceRelationShipPropTypes {
    'id': string,
    'type': string,
    'attributes': {
        'service.lists.id': string,
        'service.lists.domain': string,
        'service.lists.refid': string,
    }
}
interface ServiceSuppplierPropTypes {

    'supplier.code': {
        'code': string,
        'type': string,
        'label': string,
        'public': boolean,
        'default': {
            [key: string]: string
        },
        'required': boolean
    }[],
    'time.hourminute': {
        'code': 'time.hourminute',
        'type': string,
        'label': string,
        'public': boolean,
        'default': string,
        'required': boolean,
    }[]
}

export interface ShippingProviderProp {
    'service.id': string,
    'service.type': string,
    'service.code': string,
    'service.dateend': string | null,
    'service.datestart': string | null,
    'service.label': string,
    'service.position': number
    'service.provider': string,
    'service.status': number,
    'price': PricePropTypes,
}

interface DeliveryMethodDataPropTypes {
    'id': string,
    'type': string,
    attributes: ShippingProviderProp[],
    relationships?: {
        [key: string]: {
            data: ServiceRelationShipPropTypes[]
        }
    }
    meta: ServiceSuppplierPropTypes
}

export interface DeliveryMethodPropTypes {
    data: DeliveryMethodDataPropTypes[],
    included: DeliveryMethodImagePropTypes[]
}
