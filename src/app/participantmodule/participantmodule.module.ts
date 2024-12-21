import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantmoduleRoutingModule } from './participantmodule-routing.module';
import { ParticipantComponentComponent } from '../participant-component/participant-component.component';


@NgModule({
  declarations: [
    ParticipantComponentComponent
  ],
  imports: [
    CommonModule,
    ParticipantmoduleRoutingModule
  ]
})
export class ParticipantmoduleModule { }
