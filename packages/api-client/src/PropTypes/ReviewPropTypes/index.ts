export interface CustomerAttributePropTypes {
    address1:string,
    address2: string,
    address3:string,
    birthday:string,
    city: string,
    company: string,
    countryid:string,
    created_at: Date,
    editor:string,
    email:string,
    email_verified_at:Date
    firstname: string,
    id: number,
    langid: string,
    lastname: string,
    latitude: string,
    longitude: string,
    name: string,
    postal: string,
    salutation: string,
    siteid: string,
    state: string,
    status: number,
    superuser: number,
    telefax: string,
    telephone:string,
    title: string,
    updated_at: Date,
    vatid: string,
    website: string,
}

export interface ReviewAttributePropTypes {
    'review.id': string,
    'review.refid': string,
    'review.domain': string,
    'review.response': string,
    'review.comment': string,
    'review.rating': number,
    'review.status': number,
    'review.name': string,
    'review.ctime': string,
    'review.customer'?:CustomerAttributePropTypes,
}

export interface ReviewPropTypes {
    id: string,
    type: string,
    attributes: ReviewAttributePropTypes
}

interface TodoProductItemsAttributesPropTypes {
    'product.id': string,
    'orderProductId': number,
    'product.url': string,
    'product.type': string,
    'product.code': string,
    'product.label': string,
    'product.status': number,
    'product.dataset': string,
    'product.datestart': string | null,
    'product.dateend': string | null,
    'product.config': [],
    'product.scale': number,
    'product.target': string,
    'product.ctime': string,
    'product.rating': string,
    'product.ratings': number
}

interface TodoProductItemsMediaPropTypes {
    'media.id': string,
    'media.domain': string,
    'media.label': string,
    'media.languageid': string | null,
    'media.mimetype': string,
    'media.type': string,
    'media.preview': string,
    'media.url': string,
    'media.status': number
}

export interface TodoProductItemsPropTypes {
    'id': string,
    'attributes': TodoProductItemsAttributesPropTypes,
    'media': TodoProductItemsMediaPropTypes[],
}
