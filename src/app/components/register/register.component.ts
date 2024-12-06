import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Users, UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterModule, HttpClientModule],
  providers:[UserService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  errorMessage: string = '';

  user: Users = {
    id_user: 0,
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    mobile: "",
    birth_date: new Date(0),
    email: "",
    password: "",
    registration_date: ""
  }

  constructor(private userService: UserService, private router: Router) { }

  // Maneja el envío del formulario para crear un nuevo usuario
  onSubmit(): void {

    // Construir el objeto payload con los datos necesarios para el servicio
    const payload = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      address: this.user.address,
      city: this.user.city,
      mobile: this.user.mobile,
      birth_date: this.user.birth_date,
      email: this.user.email,
      password: this.user.password,
    };
    // Mostrar el objeto payload en la consola para depuración
    console.log('Payload a enviar:', payload);

    // Llamar al servicio para enviar los datos del nuevo usuario
    this.userService.createUser(payload).subscribe({
      // Manejo de la respuesta exitosa del servicio
      next: (result) => {
        console.log('Usuario creado con éxito:', result);
        alert('Usuario creado con éxito');
        // Limpiar los campos del formulario
        this.user = {
          id_user: 0,
          first_name: "",
          last_name: "",
          address: "",
          city: "",
          mobile: "",
          birth_date: new Date(0),
          email: "",
          password: "",
          registration_date: ""
        };
      },
      // Manejo de errores en caso de que falle la creación del usuario
      error: (e) => {
        console.error('Error al crear el usuario:', e);
        alert('Hubo un error al crear el usuario.');
      },
    });
  }



}
