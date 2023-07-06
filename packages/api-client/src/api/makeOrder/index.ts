import {MakeOrderPropTypes} from "../../PropTypes/OrderPropTypes";
type Variables = {
  input?: MakeOrderPropTypes;
};
export async function makeOrder(context,params) {
  const inputFilters = {
    "attributes": {
      "order.baseid": params.data.attributes['order.base.id'],
      "order.statusdelivery": "4",
      "order.statuspayment": "5",
      "transaction": [{
        "transaction_type": params.paymentService?.attributes['order.base.service.code'],
        "transaction_code": "Transaction",
        "transaction_value": params.paymentTransationValue ? params.paymentTransationValue : '',
        "transaction_name": params.paymentService?.attributes['order.base.service.name'],
        "order_service_id": params.paymentService?.attributes['order.base.service.id']
      },
        {
          "transaction_type": "delivery",
          "transaction_code": params.deliveryService?.attributes['order.base.service.code'],
          "transaction_value": Math.random().toString(36).substr(2),
          "transaction_name": params.deliveryService?.attributes['order.base.service.name'],
          "order_service_id": params.deliveryService?.attributes['order.base.service.id']
        }
      ]
    }
  }
  const variables: Variables = {
    input: inputFilters
  };
  try {
    const url = `jsonapi/order?_token=${params.csrf}`;
    return await context.client.post(url,variables);
  } catch (error) {
    console.log('Error makeOrder:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
