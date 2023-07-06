import {ProductPropTypes} from "../../PropTypes/ProductPropTypes";

export async function getProductDetail(context, params) {
    const url = new URL(`/jsonapi/product?id=${params.id}`, context.config.api.url);

    return   context.client.post(url.href);;

}
