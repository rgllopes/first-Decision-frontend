import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterUsersComponent } from './pages/registerusers/registerusers.component';
import { ListUsersComponent } from './pages/listusers/listusers.component';

const routes: Routes = [
{
  path: '', component: LayoutComponent,
  children:[
    {path: '', component: HomeComponent,},
    {path: 'login', component: LoginComponent},
    {path: 'create-user', component: RegisterUsersComponent},
    {path: 'list-users', component: ListUsersComponent},
  ]
},

{path: '**', redirectTo: ',login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
