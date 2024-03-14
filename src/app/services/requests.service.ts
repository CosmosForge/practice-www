import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) { }
  sendGetRequest(url:string){
    return this.http.get(url, { withCredentials: true });
  }
  sendPostRequest(url:string, body:any){
    return this.http.post(url, body, { withCredentials: true });
  }
  sendPatchRequest(url:string, body:any){
    return this.http.patch(url, body, { withCredentials: true });
  }
  sendDeleteRequest(url:string){
    return this.http.delete(url, { withCredentials: true });
  }
}
