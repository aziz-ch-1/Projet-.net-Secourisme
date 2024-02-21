import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { secouriste } from '../models/secouriste.model';
@Injectable({
  providedIn: 'root'
})
export class SecouristesService {
  baseApiUrl:string="https://localhost:7138";
  constructor(private http: HttpClient) { }

  getAllsecouristes():Observable<secouriste[]>{
    return this.http.get<secouriste[]>(this.baseApiUrl+ '/api/secouriste');
  } 

  addsecouriste(addSecouristeRequest:secouriste): Observable<secouriste>{
    addSecouristeRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<secouriste>(this.baseApiUrl+ '/api/secouriste',addSecouristeRequest);
  }

  getsecouriste(id: string): Observable<secouriste>{
    return this.http.get<secouriste>(this.baseApiUrl+ '/api/secouriste/' +id);
  }

  updatesecouriste(id: string, updatesecouristeRequest: secouriste): Observable<secouriste>{
    return this.http.put<secouriste>(this.baseApiUrl+'/api/secouriste/' +id,updatesecouristeRequest);
  }
  deletesecouriste(id :string):Observable<secouriste>{
    return this.http.delete<secouriste>(this.baseApiUrl + '/api/secouriste/' + id);
  }
}
