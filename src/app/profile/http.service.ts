import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
    public globalService: GlobalService
) {
    console.log('ProfileService.constructor()');
}



  getData(url: string) {
    return this.httpClient.get<string>(url);// headers non previsti nella nostra versione
   }
// Invia la nota perché venga aggiunta alla lista dal server
  sendData(url: string, data: string) {
  return this.httpClient.put<any>(url, data)
  }
// Invia al server l'id_note della nota che si chiede di cancellare
   deleteData(url: string, id_note: any) {
  // DELETE puro e GET
  //return this.httpClient.delete<any>(url);
  // Delete con body
  return this.httpClient.delete<any>(url, { body: { id_note: id_note } })
   }
}
