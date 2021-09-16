import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportManagementService {

  report:String[]=[]
  
  constructor(public http:HttpClient) { }

  async getReport(){  //Función que obtiene roles SE CAMBIARÀ CON EL API
    await this.http.get(environment.api+"/Mora/"+1).toPromise().then(res=>{
      this.report=res as String[]
      
    
    })
    return this.report;
  }

}
