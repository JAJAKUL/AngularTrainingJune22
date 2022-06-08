import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  loadChildren:() =>import('./layouts/demo/demo.module').then(dem => dem.DemoModule)
},
{
  path:'demo',
  loadChildren:() =>import('./layouts/demo/demo.module').then(dem => dem.DemoModule)
},{
  path:'registration',
  loadChildren:() =>import('./layouts/registration/registration.module').then(dem => dem.RegistrationModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
