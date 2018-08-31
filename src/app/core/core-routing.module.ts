import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'default',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },    
    {
        path: 'featureA',
        loadChildren: './features/feature-a/feature-a.module#FeatureAModule'
    },
    {
        path: 'featureB',
        loadChildren: './features/feature-b/feature-b.module#FeatureBModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
