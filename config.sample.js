module.exports = {
  supabaseUrl: "",
  supabaseJwtSecret: "",
  cookieConfig: {
    domain: process.env.NODE_ENV === "production" ? "" : "localhost",
    path: "/",
    secure: process.env.NODE_ENV === "production" ? true : false,
    httpOnly: true,
    sameSite: true,
    maxAge: 7 * 86400,
  },
  proxyConfig: {
    cookieParsing: false,
    anonApiKey: "",
  },
  serverConfig: {
    logger: true,
  },
  gatewayConfig: {
    port: 3000,
  },
};
