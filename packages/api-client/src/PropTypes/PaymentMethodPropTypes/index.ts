interface PricePropTypes {
    "price.costs": string,
    "price.currencyid": string,
    "price.domain": string,
    "price.id": string,
    "price.label": string,
    "price.quantity": number,
    "price.rebate": string,
    "price.status": number,
    "price.taxflag": boolean,
    "price.taxrate": string,
    "price.taxrates": {},
    "price.taxvalue": string,
    "price.type": string,
    "price.value": string
}
export interface PaymentMethodImagePropTypes {
    "id": string,
    "type": "media",
    "attributes": {
        "media.id": string,
        "media.filesystem": string,
        "media.domain": string,
        "media.label": string,
        "media.languageid": null | string,
        "media.mimetype": string,
        "media.type": string,
        "media.preview": string,
        "media.previews": string[],
        "media.url": string,
        "media.status": number
    }
}

interface ServiceRelationShipPropTypes {
    "id": string,
    "type": string,
    "attributes": {
        "service.lists.id": string,
        "service.lists.domain": string,
        "service.lists.refid": string,
    }
}
interface PaymentMethodDataPropTypes {
    "id": string,
    "type": string,
    attributes: {
        "service.id": string,
        "service.type": string,
        "service.code": string,
        "service.dateend": string | null,
        "service.datestart": string | null,
        "service.label": string,
        "service.position": number
        "service.provider": string,
        "service.status": number,
        "price": PricePropTypes,
    },
    relationships: {
        [key: string]: {
            data: ServiceRelationShipPropTypes[]
        }
    }
}
export interface PaymentMethodPropTypes {
    data: PaymentMethodDataPropTypes[],
    included: PaymentMethodImagePropTypes[]
}