import {Component, inject} from '@angular/core';
import {EmployeeService} from '../../services/employee/employee.service';
import {Employee} from './models/employee';
import {NgIf} from '@angular/common';
import Keycloak from 'keycloak-js';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-employee',
	imports: [
		NgIf,
		MatButtonModule
	],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

	private _employeeService : EmployeeService = inject(EmployeeService);
	private _keycloakService :  Keycloak = inject(Keycloak);
	public employee?: Employee;

	getEmployees() {
		console.log(this._keycloakService.profile?.email)
		console.log(this._keycloakService.profile?.firstName);
		console.log(this._keycloakService.profile?.lastName);
		this._employeeService.getAllEmployees().subscribe(employee => this.employee = employee);
	}
}
