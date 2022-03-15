import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Subject_list = new Subject();
  
  constructor(private http: HttpClient) { }
  setList(country:any){
    // console.log(country);
    this.Subject_list.next(country);
  }

  // for getting signup 
  postData(data: any) {

    return this.http.post<any>("https://angulartemplatecrud.herokuapp.com/signup", data, {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    }).pipe(map((res: any) => {
      return res;
    }));
  }
  getdataById(id:any){
    return this.http.get<any>(`https://angulartemplatecrud.herokuapp.com/signup/CrudDetails/${id}`, {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    }).pipe(map((res: any) => {
      return res;
    }));
  }
  // for getting loggin 
  postDataLogin(data: any) {
    return this.http.post<any>("https://angulartemplatecrud.herokuapp.com/signup/login", data, {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    }).pipe(map((res: any) => {
      return res;
    }))
  }
  // for entering Data through form 
  postCrudData(data: any) {
    return this.http.post<any>("https://angulartemplatecrud.herokuapp.com/signup/CrudDetails", data, {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    }).pipe(map((res: any) => {
      return res;
    }));
  }

  // for getting crud data for list
  GetCrudDetails() {
    return this.http.get<any>("https://angulartemplatecrud.herokuapp.com/signup/CrudDetails", {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    }).pipe(map((res: any) => {
      return res;
    }));
  }
  DeleteCrudData(_id: string) {
    return this.http.delete<any>(`https://angulartemplatecrud.herokuapp.com/signup/CrudDetails/${_id}`, {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    }).pipe(map((res: any) => {
      return res;
    }));
  }
  putData(data:any,_id:any){
    return this.http.put<any>(`https://angulartemplatecrud.herokuapp.com/signup/CrudDetails/${_id}`,data,{
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': 'Access-Control-Request-Headers' // This is empty
          }
        )
    }).pipe(map((res:any)=>{
      return res;
    }))
  }
}
