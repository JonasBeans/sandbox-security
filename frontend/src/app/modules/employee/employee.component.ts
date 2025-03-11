import {Component, inject} from '@angular/core';
import {EmployeeService} from '../../services/employee/employee.service';
import {Employee} from './models/employee';
import {NgFor, NgForOf, NgIf} from '@angular/common';
import Keycloak from 'keycloak-js';
import {MatButtonModule} from '@angular/material/button';

@Component({
	selector: 'app-employee',
	imports: [
		NgIf,
		MatButtonModule,
		NgFor,
		NgForOf
	],
	templateUrl: './employee.component.html',
	standalone: true,
	styleUrl: './employee.component.css'
})
export class EmployeeComponent {

	private _employeeService : EmployeeService = inject(EmployeeService);
	private _keycloakService :  Keycloak = inject(Keycloak);
	public employees?: Employee[];

	getAllEmployees() {
		console.log(this._keycloakService.profile?.email)
		console.log(this._keycloakService.profile?.firstName);
		console.log(this._keycloakService.profile?.lastName);
		this._employeeService.getAllEmployees().subscribe(employees => this.employees = employees);
	}
}
