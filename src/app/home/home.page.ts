import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {headersJSON, serverURL} from '../../global-variables';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private http: HttpClient) {}
ingresar(user: string,password: string){
  const usuario = {
    user,
    password
  };
  this.http.post(serverURL + '/register', JSON.stringify(usuario),{headers:headersJSON}).subscribe({next: (data) => {
    alert('llego el resultado' + data);
  },
  error: (error) => {
    alert('hubo un error');
    console.log(error);
  }
 });
}
}
