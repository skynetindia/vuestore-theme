type Variables = {
    input: {
        watchdata:{
            "action": string,
            "proudctId": number
        }
    };
  };

export async function removeFromWishlist(context, params) {
    const url =  `jsonapi/customer?_token=${params.csrf}`;
    const inputData = {
        "watchdata": {
            "action": "remove",
            "proudctId": params.id
        }
    }
    const variables: Variables = {
        input: inputData
    };
    try {
        return await context.client.patch(url,variables);
    } catch (error) {
        return Promise.reject;
    }
}
