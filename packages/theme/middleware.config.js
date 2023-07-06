module.exports = {
  integrations: {
    myshop: {
      location: '@vue-storefront/myshop-api/server',
      configuration: {
        api: {
          url: process.env.DOMAIN
        }
      },
    },
  },
};
