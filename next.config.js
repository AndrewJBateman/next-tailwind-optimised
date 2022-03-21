// Next Strict Content Security Policy
const { createSecureHeaders } = require("next-secure-headers");

const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "jsonplaceholder.typicode.com"],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  pwa: {
    dest: "public",
    runtimeCaching,
  },

  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              styleSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'", "data:"],
              fontSrc: "'self'",
              baseUri: "self",
              formAction: "self",
              frameAncestors: true,
            },
          },
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
        }),
      },
    ];
  },
});
