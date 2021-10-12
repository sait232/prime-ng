import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
baseUrl:any="http://localhost:3000/";
  constructor(private _http:HttpClient) { }

  public getAll(){
    return this._http.get(this.baseUrl+'Bio-Data');
  }
}
