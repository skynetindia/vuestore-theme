export async function removeFromCart(context, params) {
    const url = `jsonapi/basket?_token=${params.csrf}`;


    return await context.client.delete(url);

}
