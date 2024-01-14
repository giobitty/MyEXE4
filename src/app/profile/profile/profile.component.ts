import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {

  title="Benvenuto sul tuo Profilo"
  //prendiamo l url di indirizzo per le immagini e poi interpoliamo nell html per stampare l immagine;
  
  userProfileData: any;
  public note!: string;
  public urlImages: string = 'https://ugobetori.it/_notes/api-test/angular/angular2_unauth/img/';
  //Profile
  //private urlGet: string = 'https://ugobetori.it/_notes/api-test/angular/angular2_unauth/select_profile.php?id=' + this.globalService.loggedUser.id;
  private urlGet: string = 'https://ugobetori.it/_notes/api-test/angular/angular2_unauth/select_profile.php?id=1';
  private urlManage: string = 'https://ugobetori.it/_notes/api-test/angular/angular2_unauth/manage_profile.php';
  
  constructor(public globalService: GlobalService,
    public httpService : HttpService){
    console.log(this.globalService.loggedUser.id);
  }
  
  getUserProfile() {
    this.httpService.getData(this.urlGet)           
        .subscribe({
            next: response => this.userProfileData = response,
            error: error => console.log('Error: ' + JSON.stringify(error)),
            complete: () => console.log('getUserProfile() Completed')
        });
    }
  ngOnInit(): void {
      this.getUserProfile();
  } 

  addNote() {
    let data = {
        "id_user": this.globalService.loggedUser.id,
        
        "note": this.note
    }
    let jsonData = JSON.stringify(data);
    this.httpService.sendData(this.urlManage, jsonData)
        .subscribe({
            next: response => {
                console.log('Add:', response);
                // Il server manda in risposta una conferma o meno dell'inserimento della nuova nota nella lista
                if (response['response'] === 'Ok insert') {
                    // Richiama il metodo get per ottenere la lista aggiornata
                    this.getUserProfile();
                } else {
                    // Eventuale messaggio di errore inviato dal server per il mancato inserimento della nota
                    alert('Add ' + response['response']);
                }
            },
error: error => console.log('onError: ' + JSON.stringify(error)),
            complete: () => console.log('addNote() Completed')
        });
}
deleteNote(id_note: any) {
    console.log(id_note);
    /*
    // DELETE puro (non funziona in PHP)
    // this.profileService.deleteData(this.urlManage+'/'+id_note)
    // DELETE tramite GET
    // this.profileService.deleteData(this.urlManage+'?id_note='+id_note)
    */
    // DELETE con body
    this.httpService.deleteData(this.urlManage, id_note)
.subscribe({
            next: response => {
                console.log(response);
                // IL server manda in risposta una conferma o meno della rimozione della nota dalla lista
                if (response['response'] === 'Ok delete') {
                    // Richiama il metodo get per ottenere la lista aggiornata
                    this.getUserProfile();
                } else {
                    // Eventuale messaggio di errore inviato dal server per la mancata rimozione della nota
                    alert('Delete ' + response['response']);
                }
            },
            error: error => console.log('onError: ' + JSON.stringify(error)),
            complete: () => console.log('deleteNote() Completed')
        });
}
}
