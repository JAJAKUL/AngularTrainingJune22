import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../../shared/web-service.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  array: any = [];
  array2: any = [];
  constructor(public webService: WebServiceService) {}

  ngOnInit(): void {
    let getda = this.webService.getData();
    let getda1 = this.webService.data;
    console.log('getda=============', getda);
    console.log('getda1=============', getda1);
    this.getValue();
    this.webService.getObservables();
  }
  

  getValue() {
    this.webService.getService().subscribe(
      (res: any) => {
        this.array2 = res.dataseries;
        console.log(this.array2);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // getService(){
  //   // let data = this.webService.getService();
  //   this.webService.getValue().subscribe((res: any)=>{
  //     this.array = res;
  //     console.log(this.array);
  //   },err=>{console.log(err);}
  //   )
  // }
}
