import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [

  { path: 'team', loadChildren: () => import('./team-module/team-module.module').then(m => m.TeamModuleModule) },



 // { path: 'add-team', loadChildren: () => import('./team-module/team-module.module').then(m => m.TeamModuleModule) },
// { path: '', redirectTo: 'show-teams', loadChildren: () => import('./team-module/team-module.module').then(m => m.TeamModuleModule), pathMatch: 'full' },

  { path: '', redirectTo: '/show-teams', pathMatch: 'full' },



  { path: '**', component: NotFoundComponentComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
