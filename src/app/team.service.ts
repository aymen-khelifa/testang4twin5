import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl:string='http://localhost:3000/'
  constructor(private http:HttpClient) { }

   add<T>(endpoint:string,body:any){
    return this.http.post<T>(`${this.baseUrl}${endpoint}`,body);
    }


  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }


    /* addTeam(team: Team) {
        this.teams.push(team);
      }
*/


}
