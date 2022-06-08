import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor() { }
  getData(){
    return ['abc','bcd','xyz']
  }
  data={
    name:'abc',
    email:'abc@gmail.com'
  }
}
