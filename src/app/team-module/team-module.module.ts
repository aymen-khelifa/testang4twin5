import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamModuleRoutingModule } from './team-module-routing.module';
import { TeamsComponentComponent } from '../teams-component/teams-component.component';
import { TeamComponentComponent } from '../team-component/team-component.component';
import { FormTeamComponentComponent } from '../form-team-component/form-team-component.component';
import { MyTeamsComponentsComponent } from '../my-teams-components/my-teams-components.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeamsComponentComponent,
    TeamComponentComponent,
    FormTeamComponentComponent,
    MyTeamsComponentsComponent
  ],
  imports: [
    CommonModule,
    TeamModuleRoutingModule,FormsModule
  ]
})
export class TeamModuleModule { }
