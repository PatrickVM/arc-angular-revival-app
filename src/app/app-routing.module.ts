import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RevivalDetailComponent } from './revival-detail/revival-detail.component';
import { RevivalsComponent } from './revivals/revivals.component';

const routes: Routes = [
  { path: 'detail/:id', component: RevivalDetailComponent },
  { path: 'revivals', component: RevivalsComponent },
  { path: '', redirectTo: '/revivals', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
