import { Component, OnInit } from '@angular/core';
import { WebServiceService} from '../../shared/web-service.service'
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(
    public webService :WebServiceService
  ) { }

  ngOnInit(): void {
    let getda = this.webService.getData()
    let getda1 = this.webService.data
    console.log('getda=============', getda)
    console.log('getda1=============', getda1)
  }

}
