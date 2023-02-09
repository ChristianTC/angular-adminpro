import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {
    this.returnObservable().pipe(
      retry(1)
    ).subscribe({
      next: value => console.log('Subs', value),
      error: (error) => console.error('Error', error),
      complete: () => console.log('Obs completed')
    })

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
