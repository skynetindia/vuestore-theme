
type Variables = {
    input?: {
      email:string
    };
  };

export async function customerResetPassword(context, params) {
  const inputFilters = {
    email: params
  };

  const variables: Variables = {
    input: inputFilters
  };
  const url=new URL("/api/forget-password",context.config.api.url);
  try {
    return context.client.post(url,variables);
  } catch (error) {
    console.log('Error customerResetPassword:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
