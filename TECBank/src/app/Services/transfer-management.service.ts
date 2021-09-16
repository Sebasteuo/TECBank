import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Transfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferManagementService {

  transfers: Transfer[] = []

  constructor(private http: HttpClient, public toastr: ToastrService) { }

  async getTransfers(id: string) {
    await this.http.get(environment.api + "/pago/getPagos/" + id).toPromise().then(res => {
      this.transfers = res as Transfer[]
    })
    return this.transfers;
  }

  async makeTransfers(transfer: Transfer) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hoy = mm + '/' + dd + '/' + yyyy;

    transfer.fechaPago = hoy

    await this.http.post(environment.api + "/pago", transfer).toPromise().then(res => {
      this.toastr.success("Transacción registrada exitósamente", "Confirmación")

    }, error => {
      this.toastr.error("No se pudo registrar", "Error")
      console.log(error)
    })
    return this.transfers;
  }

}

