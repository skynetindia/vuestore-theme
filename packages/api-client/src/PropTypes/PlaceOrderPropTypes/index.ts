interface TransationPropTypes {
    "transaction_type": string,
    "transaction_code": string,
    "transaction_value": string,
    "transaction_name": string,
    "order_service_id": string,
}
export interface PlaceOrderPropTypes {
    "attributes": {
        "order.baseid": string,
        "order.delivery_status": string,
        "order.payment_status": string,
        "transaction": TransationPropTypes[],
    }        
}