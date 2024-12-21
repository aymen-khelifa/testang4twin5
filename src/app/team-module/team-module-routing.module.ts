import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponentComponent } from '../teams-component/teams-component.component';
import { FormTeamComponentComponent } from '../form-team-component/form-team-component.component';
import { MyTeamsComponentsComponent } from '../my-teams-components/my-teams-components.component';

const routes: Routes = [
  { path: 'show-teams', component: TeamsComponentComponent } ,

  { path: 'add-team', component: FormTeamComponentComponent } ,

  { path: 'my-teams', component: MyTeamsComponentsComponent } ,



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamModuleRoutingModule { }
