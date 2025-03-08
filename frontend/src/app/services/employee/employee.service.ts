import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../modules/employee/models/employee';
import {catchError, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	private httpClient : HttpClient = inject(HttpClient);

	getAllEmployees(): Observable<Employee> {
		return this.httpClient.get<Employee>("http://localhost:8080/api/employee")
			.pipe(
				catchError(this.handleError<Employee>('get employees'))
			);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		}
	}
}
