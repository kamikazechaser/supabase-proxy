module.exports = {
  supabaseUrl: "" || process.env.SUPABASE_URL,
  supabaseConfig: {
    jwtSecret: "" || process.env.SUPABASE_JWT_SECRET,
    serviceApiKey: "" || process.env.SUPABASE_SERVICE_API_KEY,
    cookieConfig: {
      maxAge: 7 * 86400 || process.env.COOKIE_MAX_AGE,
    },
  },
  serverConfig: {
    logger: true || process.env.DEBUG,
  },
  gatewayConfig: {
    port: 3000 || process.env.GATEWAY_PORT,
  },
};
