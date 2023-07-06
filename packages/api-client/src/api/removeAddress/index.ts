

export async function removeAddress(context, params) {
    const url = `jsonapi/customer?related=address&relatedid=${params.shipping_id}&_token=${params.csrf}`;


    return await context.client.delete(url);

}
