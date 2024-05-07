import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  id : number = 0
  login(data:any){
    return this.http.post('http://localhost:3000/api/v1/user/login',data)
  };
  getAllmember(){
    return this.http.get('http://localhost:3000/api/v1/user');
  }
  getOneMember(id : any){
    return this.http.get(`http://localhost:3000/api/v1/user/${id}`)
  }
  getBmember(id : any){
    return this.http.get(`http://localhost:3000/api/v1/user/getBmember/${id}`)
  }
}
