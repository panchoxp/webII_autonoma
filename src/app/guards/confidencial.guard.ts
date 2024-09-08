import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';

//restringe acceso hasta que se acceda con loggin
export const confidencialGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const acceso = sessionStorage.getItem('login') === 'true';

  if (!acceso) {
    router.navigate(['/login']);
  }

  return acceso;
};
////////////////////si no esta login no entra, 
//despues de acceder en loggin se ingresa a galeria

export const galeriaGuard: CanMatchFn = (route, state) => {
  const router = inject(Router);
  const access = sessionStorage.getItem('login') !== 'true';

  if (!access) {
    router.navigate(['/home']);
  }

  return access;
};
