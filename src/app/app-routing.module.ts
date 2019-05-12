import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsProfileComponent } from './components/body/details-profile/details-profile.component';

const routes: Routes = [{
  path: 'details/:id', component: DetailsProfileComponent
},
/*
{
  path: '**', component: NotYetImplementedComponent
}
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
