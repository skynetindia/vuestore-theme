import { ReviewAttributePropTypes} from '../../PropTypes/ReviewPropTypes';

type Variables = {
    input?: ReviewAttributePropTypes;
  };

export async function createProductReview(context, params) {
    const inputFilters = {
        'review.id': params?.id,
        'review.refid': params?.productId,
        'review.domain': `product`,
        'review.response': ``,
        'review.comment': params?.comment,
        'review.rating': params?.comment,
        'review.status': 1,
        'review.name': params?.name,
        'review.ctime': params?.name,
    };

    const variables: Variables = {
        input: inputFilters
    };

    const url = new URL("jsonapi/customer?related=review",context.config.api.url);
    try {
        return await context.client.post(url,variables);
    }  catch (error) {
        console.log('Error getProductList:');
        console.log(error);
        throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
    }
}
