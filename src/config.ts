const shared = {
  zelenkaApi: {
    baseUrl: ""
  }
};

const config = {
  test: { ...shared },
  development: {
    ...shared,
    zelenkaApi: {
      baseUrl: "https://eugdnxcr0j.execute-api.eu-central-1.amazonaws.com/dev"
    }
  },
  production: {
    ...shared,
    zelenkaApi: {
      baseUrl: "https://lfy6lmkx39.execute-api.eu-central-1.amazonaws.com/prod"
    }
  }
};

export default config[process.env.NODE_ENV];
