import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakService} from '../security/keycloak.service';

@Injectable({
	providedIn: 'root'
})
export class HttpTokenInterceptorService implements HttpInterceptor {

	constructor(
		private keycloakService: KeycloakService
	) {
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this.keycloakService.keycloak.token;
		if (token) {
			const authReq = request.clone({
				headers: new HttpHeaders({
					Authorization: `Bearer ${token}`
				})
			});
			return next.handle(authReq);
		}
		return next.handle(request);
	}
}
