import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsProfileComponent } from './components/body/body/details-profile.component';
import { BodyComponent } from './components/body/body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'details/:id', component: DetailsProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
