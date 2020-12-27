const fp = require("fastify-plugin");
const fastifyProxy = require("fastify-http-proxy");

async function plugin(server, config) {
  server
    .register(fastifyProxy, {
      upstream: config.supabaseUrl,
      prefix: "/proxy",
      prehandler: require("./handlers/proxy"),
    })
    .register(require("./routes/auth"), {
      prefix: "/auth",
      config: config.supabaseConfig,
    });

  server.addHook("onRequest", async (req) => {
    req.log.info({ req }, "incoming request");
  });

  server.setErrorHandler((err, req, res) => {
    if (res.statusCode >= 500) {
      req.log.error({ req, res, err }, err && err.message);
    } else if (res.statusCode >= 400) {
      req.log.info({ req, res, err }, err && err.message);
    }

    res.send(err);
  });
}

module.exports = fp(plugin);
