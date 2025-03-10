// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:  'https://127.0.0.1:8000/api',
  API_AUTH: 'https://127.0.0.1:8000/api/auth',
  WP_URL: 'https://wp.acps.com.au',
  SENTRY_DSN: 'https://cd381a567a8c1442c54e8e34c1c244d5@o4507586670559232.ingest.us.sentry.io/4507586677374976',
  ACCESS_HEADER: 'X-Access-Token',
  ACCESS_TOKEN:'csj9ibynqLWnGPm-CZGZzdbXYv2EskL4BJ2A2uy177Q=',
  SECRET_KEY: "SPCA-TNEMPOLEVED",
  EWAY_PUB_KEY: "/aOKJdFTZz+c2XW2sialjCaoWTwOicUMoQ7C+L5Hb58JIM7YoyuZOZsPn92HDUeKGlhJEK9uvKz/7Bg3NWS42sms/Y3Pl3d7e90SaxoyUqHKUr5nRCJ1iVcUF8s6SXFJ9OJZJYwiPIrNunAg059a5mcoxBY3BOxENjcChXoileEcsPl+6Yg0qVYx8Z1Y7Rj46EgHvRebfWsUj/5iiQZ+2tSDYQyxDN0ozpqrUcfJZWNegCDUrprilTELK5Ha1ODuSV2zFX8dku4M54EmJyGVzTCW/RFGTIXM9HNCrDCuuWiYYAjoy2T4Vscl5bkrSOOTmXdSFbtm+t6tK0g9osJXrQ==",
  addNoIndexMeta: true, // Add this property,
  DIRECT_LINK: 'http://localhost:4200/members-only'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
