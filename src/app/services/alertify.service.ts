import { Injectable } from '@angular/core';
import alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){
      alertifyjs.success(message);
  }

  error(message:string){
    alertifyjs.error(message);
}

warning(message:string){
  alertifyjs.warning(message);
}
}
