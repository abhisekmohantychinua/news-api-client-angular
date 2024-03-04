import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EverythingComponent } from './pages/everything/everything.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'everything', component: EverythingComponent },
];
