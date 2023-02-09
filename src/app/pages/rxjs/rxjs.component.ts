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
    
    const obs$ = new Observable( observer => {
      let num = 0
      const interval = setInterval(()=>{
        num++
        observer.next(num)
        if (num === 5) {
          observer.complete
          clearInterval(interval)
        }
        if (num === 2) {
          num = 0
          observer.error('Error')
        }
      },1000)
    })

    obs$.pipe(
      retry(1)
    ).subscribe({
      next: value => console.log('Subs', value),
      error: (error) => console.error('Error', error),
      complete: () => console.log('Obs completed')
    })

  }

}
