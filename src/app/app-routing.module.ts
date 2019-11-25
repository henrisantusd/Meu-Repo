import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'minha-page', loadChildren: './minha-page/minha-page.module#MinhaPagePageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'dynamic-pjn', loadChildren: './dynamic-pjn/dynamic-pjn.module#DynamicPjnPageModule' },
  { path: 'm-page', loadChildren: './m-page/m-page.module#MPagePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
