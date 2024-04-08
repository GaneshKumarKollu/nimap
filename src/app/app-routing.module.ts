import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './users/home/home.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  {path :'',redirectTo :'home',pathMatch :'full'},
  {path:'home',component:HomeComponent},
  {path:'details',component:UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
