export async function getCategories(context, params) {
    const url = new URL('/jsonapi/catalog', context.config.api.url);
    try {
        return context.client.get(url.href);

    } catch (error) {
        console.log('Error getCategories:');
        console.log(error);
        throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
    }
}
