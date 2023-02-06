

export async function getNewProduct(context, params) {
    const url = new URL('/jsonapi/product?filter[f_catid]=[16]', context.config.api.url);
    try {
        return context.client.get(url.href);

    } catch (error) {
        console.log('Error getNewProduct:');
        console.log(error);
        throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
    }
}
