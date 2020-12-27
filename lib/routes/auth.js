module.exports = async function (server, options, done) {
  server.get("/", options, async function (request, reply) {
    return { ok: true };
  });

  done();
};
