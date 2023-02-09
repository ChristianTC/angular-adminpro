import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {
    // this.returnObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //   next: value => console.log('Subs', value),
    //   error: (error) => console.error('Error', error),
    //   complete: () => console.log('Obs completed')
    // })

    this.returnInterval().subscribe(console.log)

  }

  returnInterval(): Observable<Number> {
    return interval(1000).pipe(
      take(4),
      map( value => value+1)
    )
  }

  returnObservable(): Observable<number> {
    let num = -1
    return new Observable<number>( observer => {
      const interval = setInterval(()=>{
        num++
        observer.next(num)
        if (num === 4) {
          clearInterval(interval)
          observer.complete()
        }
        if (num === 2) {
          console.log('error', num);
          observer.error('Error')
        }
      },1000)
    })
  }

}
