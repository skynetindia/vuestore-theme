export interface CustomerAttributePropTypes {
    'customer.id': string | null,
    'customer.salutation': string,
    'customer.profile_pic': string,
    'customer.company': string,
    'customer.vatid': string,
    'customer.title': string,
    'customer.firstname': string,
    'customer.lastname': string,
    'customer.address1': string,
    'customer.address2': string,
    'customer.address3': string,
    'customer.postal': string,
    'customer.city': string,
    'customer.state': string,
    'customer.languageid': string,
    'customer.countryid': string,
    'customer.telephone': string,
    'customer.email': string,
    'customer.telefax': string,
    'customer.website': string,
    'customer.longitude'?: number,
    'customer.latitude'?: number,
    'customer.label': string,
    'customer.code': string,
    'customer.birthday': string,
    'customer.status': number,
}
export interface CustomerPropTypes {
    attributes: CustomerAttributePropTypes,
}

export interface CustomerAddressAttributePropTypes {
    'customer.address.salutation': string,
    'customer.address.company': string,
    'customer.address.vatid': string,
    'customer.address.title': string,
    'customer.address.firstname': string,
    'customer.address.lastname': string,
    'customer.address.address1': string,
    'customer.address.address2': string,
    'customer.address.address3': string,
    'customer.address.postal': string,
    'customer.address.city': string,
    'customer.address.state': string,
    'customer.address.countryid': string,
    'customer.address.languageid': string,
    'customer.address.telephone': string,
    'customer.address.telefax': string,
    'customer.address.email': string,
    'customer.address.website': string,
    'customer.address.longitude': number,
    'customer.address.latitude': number
    'customer.address.id': string,
    "defaultAddress"?:any
}

export interface CustomerAddressPropTypes {
    'attributes': CustomerAddressAttributePropTypes
}
export interface customerRegisterPropTypes{
    "attributes": {
        "customer.code": string,
        "customer.firstname": string,
        "customer.lastname": string,
        "customer.telephone": string,
        "customer.email": string,
        "customer.password": string
    }
}
export interface LoginInput{
    "islogin": boolean,
    "email": string,
    "password": string,
    "_token"?: string
}
