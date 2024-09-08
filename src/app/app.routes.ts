import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { CondifencialComponent } from './pages/condifencial/condifencial.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { GaleriaCompletaComponent } from './pages/galeria-completa/galeria-completa.component';
import { confidencialGuard, galeriaGuard } from './guards/confidencial.guard';

export const routes: Routes = [
    // Rutas disponibles solo cuando el usuario está autenticado
    { path: 'home', component: HomeComponent, canActivate: [confidencialGuard] },
    { path: 'confidencial', component: CondifencialComponent, canActivate: [confidencialGuard] },
    { path: 'galeria', component: GaleriaComponent, canActivate: [confidencialGuard] },
    { path: 'galeria2', component: GaleriaCompletaComponent, canActivate: [confidencialGuard] },

    // Rutas disponibles solo cuando el usuario NO está autenticado
    { path: 'login', component: LoginComponent, canActivate: [galeriaGuard] },
    { path: 'registro', component: RegistroComponent, canActivate: [galeriaGuard] },

    // Ruta raíz que redirige a home
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // Manejo de rutas no encontradas
    { path: '**', component: Error404Component }
];
