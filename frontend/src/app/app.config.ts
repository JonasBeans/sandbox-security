import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {
	createInterceptorCondition,
	IncludeBearerTokenCondition,
	INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
	includeBearerTokenInterceptor,
	provideKeycloak
} from "keycloak-angular";

const urlCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
	urlPattern: /^(http:\/\/localhost:8080)(\/.*)?$/i,
	bearerPrefix: 'Bearer'
});

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({eventCoalescing: true}),
		provideRouter(routes),
		provideKeycloak({
			config: {
				url: 'http://localhost:9090',
				realm: 'book-social-network',
				clientId: 'bsn'
			},
			initOptions: {
				onLoad: 'login-required',
			}
		}),
		{
			provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
			useValue: [urlCondition] // <-- Note that multiple conditions might be added.
		},
		provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
	]
};
