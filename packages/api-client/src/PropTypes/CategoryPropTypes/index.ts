interface CateogoryAttributePropTypes {
    'catalog.code': string,
    'catalog.hasChildren': boolean,
    'catalog.label': string,
    'catalog.url': string
}
interface CategoryMediaPropTypes {
    'media.id': string,
    'media.url': string,
    'media.type': string,
    'media.status': string,
}
export interface CategoryPropTypes {
    attributes: CateogoryAttributePropTypes,
    id: number,
    type?: string,
    icon?: string,
    short?: string,
    long?: string,
    menu?: string,
    media?: CategoryMediaPropTypes[]
}

