module.exports = {
  // Can be obrained from Supabase > Settings > API
  supabaseUrl: "",
  supabaseJwtSecret: "",
  cookieConfig: {
    domain: process.env.NODE_ENV === "production" ? "" : "localhost",
    path: "/",
    secure: process.env.NODE_ENV === "production" ? true : false,
    httpOnly: true,
    sameSite: true,
    // Defaults to 7 days
    maxAge: 7 * 86400,
  },
  proxyConfig: {
    // Enable cookie parsing if you want to proxy with cookies
    cookieParsing: true,
    // Can be obrained from Supabase > Settings > API
    anonApiKey: "",
  },
  serverConfig: {
    // Accepts Pino.js options
    logger: true,
  },
  gatewayConfig: {
    port: 3000,
  },
};
