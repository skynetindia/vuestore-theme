
export async function getFeaturedProduct(context, params) {
    const url = new URL('/jsonapi/product?filter[f_catid]=[15]', context.config.api.url);
    try {
        context.client.get(url.href);

    } catch (error) {
        console.log('Error getFeaturedProduct:');
        console.log(error);
        throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
    }
}
