import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './landing/home/home.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./landing/home/home.component').then(c => c.HomeComponent)},
  { path: 'login', component: LoginComponent }
];