import { OrderBaseServicePropTypes } from '../../PropTypes/OrderPropTypes';

type Variables = {
    input: OrderBaseServicePropTypes;
  };

export async function savePaymentMethod(context, params) {
  const variables: Variables = {
    input: params
  };

    const url = new URL(`josnapi/basket?id=default&related=service&relatedid=payment&_token=${params.csrf}`, context.config.api.url);
    return await context.client.post(url,variables);
}
