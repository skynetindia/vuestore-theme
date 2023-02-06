

export async function customerLogout(context, params) {
  const url=new URL("/logout",context.config.api.url);
  try {
    return await context.client.post(url);
  } catch (error) {
    console.log('Error customerLogout:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
