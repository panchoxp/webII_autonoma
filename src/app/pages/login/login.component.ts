import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any;
  password: any;

  servicio = inject(UsuariosService);
  router = inject(Router);

  login(form: NgForm) {
    this.servicio.postlogin(form.value).subscribe(u => {
      if (u.accessToken != '') {
        sessionStorage.setItem("login", "true");
        this.router.navigate(['/confidencial']);
        window.location.reload();
      }
    });
  }
}
