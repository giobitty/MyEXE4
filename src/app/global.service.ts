import { Injectable } from '@angular/core';
import { Logged } from './login/logged';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
//gli diamo gli argomenti da salvare
loggedUser!: Logged;
//saranno gli user che richiamiamo nei metodi del login
networkUsers: any[] = [];

constructor(private httpClient : HttpClient) { }
}
