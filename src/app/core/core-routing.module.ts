import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '@app/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'featureA',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'featureA',
        canActivate: [AuthGuardService],
        loadChildren: 'app/features/feature-a/feature-a.module#FeatureAModule'
    },
    {
        path: 'featureB',
        canActivate: [AuthGuardService],
        loadChildren: 'app/features/feature-b/feature-b.module#FeatureBModule'
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
