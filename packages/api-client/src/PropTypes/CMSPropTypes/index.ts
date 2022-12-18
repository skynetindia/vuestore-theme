type CMSMediaPropTypes  = {
    "media.id": string,
    "media.filesystem": string,
    "media.domain": string,
    "media.label": string,
    "media.languageid": string | null,
    "media.mimetype": string,
    "media.type": string,
    "media.preview": string,
    "media.previews": {
        [key: string]: string
    },
    "media.url": string,
    "media.status": number
}

type CMSTextPropTypes  = {
    "text.id": string,
    "text.languageid": string | null,
    "text.type": string,
    "text.label": string,
    "text.domain": string,
    "text.content": string,
    "text.status": number
}

interface CMSDataPropTypes {
    "id": string,
    "type": "cms",
    "attributes": {
        "cms.id": string,
        "cms.url": string,
        "cms.label": string,
        "cms.status": number
    }
}

export interface CMSPropTypes {
    "data": CMSDataPropTypes[],
    "included": {
        "id": string,
        "type": string,
        "attributes": CMSMediaPropTypes | CMSTextPropTypes
    }[]
}