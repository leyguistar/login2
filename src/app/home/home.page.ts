import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {headersJSON, serverURL} from '../../global-variables';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private http: HttpClient) {}
ingresar(user: string,password: string){
  const hashedPassword: string = shajs('sha256').update(password).digest('hex');
  console.log(hashedPassword);
  const usuario = {
    user,
    password: hashedPassword
  };
  this.http.post(serverURL + '/login', JSON.stringify(usuario),{headers:headersJSON}).subscribe({next: (data) => {
    alert('llego el resultado' + data);
  },
  error: (error) => {
    alert('hubo un error');
    console.log(error);
  }
 });
}
}
