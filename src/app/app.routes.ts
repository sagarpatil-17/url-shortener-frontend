import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
    { path: '', component: Home, title: 'SnapURL — Shorten, Share & Track Links' },
    { path: '**', redirectTo: '' }
];
