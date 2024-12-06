import { Component } from '@angular/core';
import { RegisterComponent } from '../../auth/register/register.component';
import { LoginComponent } from "../../auth/login/login.component";
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ RouterOutlet, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
