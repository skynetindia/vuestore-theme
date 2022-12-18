export interface ProductAttributePropTypes {
    'product.id': string,
    'product.url': string,
    'product.type': string,
    'product.code': string,
    'product.label': string,
    'product.model': string,
    'product.finish': string,
    'product.year': string,
    'product.country': string,
    'product.status': number,
    'product.dataset': string,
    'product.datestart': Date | null,
    'product.dateend': Date | null,
    'product.config': any,
    'product.scale': number,
    'product.target': string,
    'product.ctime': string,
    'product.rating': string,
    'product.ratings': number,
    'product.instock': number
}
interface ProductMediaPropTypes {
    'media.id': number,
    'media.domain': string,
    'media.label': string,
    'media.languageid': string | null,
    'media.mimetype': string,
    'media.type': string,
    'media.preview': string,
    'media.previews': {
        [key: string]: string
    },
    'media.url': string,
    'media.status': number
}
interface ProductTextPropTypes {
    'text.id': string,
    'text.languageid': string,
    'text.type': string,
    'text.label': string,
    'text.domain': string,
    'text.content': string,
    'text.status': number,
}
interface ProductPricePropTypes {
    'price.currencyid': string,
    'price.domain': string,
    'price.quantity': number,
    'price.value': string,
    'price.costs': string,
    'price.rebate'?: string,
    'price.taxvalue': string,
    'price.taxrate': string,
    'price.taxflag': boolean,
    'price.status': number
}
interface CatalogPropTypes {
    id: string,
    code: string,
    label: string,
    url?: string,
    level?: number,
    parentid?: string,
    type: string
}
export interface VariationPropTypes {
    [variation: string]: {
        'attribute.id': string,
        'attribute.domain': string,
        'attribute.type': string,
        'attribute.code': string,
        'attribute.label': string,
        'attribute.status': number,
        'attribute.position': number,
        variation_product_ids: [],
        media: ProductMediaPropTypes[]
    }
}
interface VariationsPropTypes {
    [variation: string]: VariationPropTypes
}

interface BrandAttributePropTypes {
    'supplier.id': string,
    'supplier.url': string,
    'supplier.type': string,
    'supplier.code': string,
    'supplier.label': string,
    'supplier.status': number,
}

/* interface SupplierMediaPropTypes {
    id: string,
    ref_type: string,
    type: string,
    value: string,
} */

export interface SupplierPropTypes {
    id: string,
    code: string,
    label: string,
    type: string,
    attributes:BrandAttributePropTypes,
    supplier_media?:ProductMediaPropTypes[]
    icon?: string,
    short?: string,

}
interface CondAttributePropTypes {
    'attribute.id': string,
    'attribute.url': string,
    'attribute.type': string,
    'attribute.code': string,
    'attribute.label': string,
    'attribute.status': number,
}
export interface AttributePropTypes {
    id: number,
    code: string,
    label: string,
    type: string,
    attributes:CondAttributePropTypes
}
export interface StockPropTypes {
    level: number,
    id: string,
    type: string,
}
export interface CharacteristicsPropTypes {
    media: ProductMediaPropTypes,
    name: string,
    value: string,
    short_description: string,
    long_description: string
}
export interface RelatedVideoProptypes {
    type: string,
    id: string,
    value: string,
    label: string,
}
export interface QuestionAnswerProptypes {
    'questions.id': string,
    'questions.media': string,
    'questions.author': string,
    'questions.ctime': string,
    'questions.mtime': string,
    'questions.comment': string,
    'questions.editor': string,
    answer: {
        'questions.id': string,
        'questions.author': string,
        'questions.ctime': string,
        'questions.mtime': string,
        'questions.comment': string,
        'questions.editor': string,
        'questions.media': string,
    }

}
export interface ProductListPropTypes{
    'product.lists.id': string,
    'product.lists.domain': string,
    'product.lists.refid': string,
    'product.lists.config': string,
    'product.lists.dateend': string,
    'product.lists.datestart': string,
    'product.lists.position': string,
    'product.lists.status': string,
    'product.lists.type': string,
}
export interface AttributealPropTypes{
    attributes: ProductListPropTypes,
    id: string,
    label: string,
    type: string
}
export interface ProductPropTypes {
    id: number,
    type: string,
    attributes: ProductAttributePropTypes,
    product: ProductPropTypes[],
    media?: ProductMediaPropTypes[],
    text?: ProductTextPropTypes[],
    price?: ProductPricePropTypes[],
    catalog?: CatalogPropTypes[],
    supplier: SupplierPropTypes[],
    stock?: StockPropTypes[],
    Characteristics: CharacteristicsPropTypes[],
    suggested_product?: ProductPropTypes[],
    bought_together_product?: ProductPropTypes[],
    variation_selection: VariationsPropTypes,
    favorite: boolean,
    watch: boolean,
    property:RelatedVideoProptypes[],
    attribute:AttributealPropTypes[]
}
