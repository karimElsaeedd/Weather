// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherAppBaseUrl: 'https://weatherapi-com.p.rapidapi.com/current.json',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '344b553260msh7092ae85f51bef4p1099f5jsnab8dc5aa7076',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'weatherapi-com.p.rapidapi.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
