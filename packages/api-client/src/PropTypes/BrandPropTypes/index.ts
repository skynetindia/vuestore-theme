interface BrandMediaPropTypes {
    content: string,
    id: string,
    label: string,
    type: string
}
export interface BrandPropTypes {
    id: string,
    type: string,
    attributes: {
        'supplier.code': string,
        'supplier.id': string,
        'supplier.label': string,
        'supplier.status': number
    }
    relationships?: {
        media?: {
            data: BrandMediaPropTypes[]
        }
    }
}
