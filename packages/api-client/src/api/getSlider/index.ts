
export async function getSlider(context, params) {
    const url = new URL('/jsonapi/cms', context.config.api.url);
    try {
        return context.client.get(url.href)

    } catch (error) {
        console.log("error");
        console.log(error);
        throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
    }
}