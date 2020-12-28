module.exports = async function (req, _) {
  const config = req.context.config;

  if (!config.officialClient) req.headers.apikey = config.anonApiKey;
};
