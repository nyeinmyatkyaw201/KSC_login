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
    return this.http.get(`http://localhost:3000/api/v1/user/getOneMember/${id}`)
  }
  getBmember(id : any){
    return this.http.get(`http://localhost:3000/api/v1/user/getBmember/${id}`)
  }
  Uploadedfile(id : any){
    return this.http.get(`http://localhost:3000/api/v1/member/upload/getallfile/${id}`)
  }

  getNrcNo(){
    return this.http.get("http://localhost:3000/api/v1/user/nrc")
  };
  getNrcPlace(data:any){
    return this.http.get(`http://localhost:3000/api/v1/user/nrc/${data}`)
  };
  getReligion(){
    return this.http.get('http://localhost:3000/api/v1/user/religion')
  };
  getRace(){
    return this.http.get('http://localhost:3000/api/v1/user/race')
  }
  register(data : any){
    return this.http.post('http://localhost:3000/api/v1/user/registrationmember',data)
  }

}
