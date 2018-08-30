import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'featureA',
    loadChildren: 'app/features/feature-a/feature-a.module#FeatureAModule'
  },
  {
    path: 'featureB',
    loadChildren: 'app/features/feature-b/feature-b.module#FeatureBModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
