import { Component, OnInit } from '@angular/core';
import { Team } from '../modele/team';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-team-component',
  templateUrl: './form-team-component.component.html',
  styleUrls: ['./form-team-component.component.css']
})
export class FormTeamComponentComponent implements OnInit{
//projectName: any;
//name: any;
  //constructor(private consumer:TeamService,private r:Router){}
  //team: Team = new Team();
  teams: Team[]=[];
  team!: Team;

  ngOnInit(): void {this.team = new Team();

  }

 /* addTeam() {
    this.consumer.add<Team>('category', this.team)
    .subscribe({
    next: () => this.r.navigate(['/home']),
  });
  }*/

}
