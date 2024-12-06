import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService, LoginRequest } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet,  RouterModule, HttpClientModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage: string = '';

  credentials: LoginRequest = {
    email: '',
    password: '',
  };
  
  constructor(private authService: AuthService, private router: Router) { }


  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        // Aquí puedes guardar el token en localStorage o manejar la sesión
        localStorage.setItem('authToken', response.token);
      },
      error: (err) => {
        console.error('Error en el login:', err);
        this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      },
    });
  }

}
