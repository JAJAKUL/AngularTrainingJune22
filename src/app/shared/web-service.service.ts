import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebServiceService {
  url =
    'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json';

  srcArray = from([1, 2, 'A', 4]);

  constructor(public httpClient: HttpClient) {}

  getData() {
    return ['abc', 'bcd', 'xyz'];
  }

  data = {
    name: 'abc',
    email: 'abc@gmail.com',
  };

  getService(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map((val) => {
        let result = val;
        return result;
      })
    );
  }

  getObservables() {
    const obs = this.srcArray.pipe(
      map((val) => {
        let result = (val as number) * 2;
        if (Number.isNaN(result)) {
          console.log('Errors Occurred in Stream');
          throw new Error('Result is NaN');
        }
        return result;
      }),
      catchError((error) => {
        console.log('Caught in CatchError. Returning 0');
        return of(0); //return from(['A','B','C'])
      })
    );
  }

  // getValue() {
  //   return this.httpClient.get(
  //     'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json'
  //   );
  // }
}
