export async function removeReview(context, params) {

    const url = `jsonapi/customer?related=review&relatedid=${params.review_id}&_token=${params.csrf}`;


    return await context.client.delete(url);
}
