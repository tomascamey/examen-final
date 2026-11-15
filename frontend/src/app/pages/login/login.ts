import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  styleUrl: './login.scss',
  templateUrl: './login.html', // Asegúrate de que este nombre coincida con tu archivo
})
export class Login {
  constructor(private router: Router) {}

  onLogin() {
    // Por ahora haremos una redirección directa sin validación real
    this.router.navigate(['/browse']);
  }
}