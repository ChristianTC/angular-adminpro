import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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
        observer.next(num)
        if (num === 5) {
          observer.complete
          clearInterval(interval)
        }
        if (num === 7) {
          observer.error('Error')
        }
        num++
      },1000)
    })

    obs$.subscribe({
      next: value => console.log('Subs', value),
      error: (error) => console.error('Error', error),
      complete: () => console.log('Obs completed')
    })

  }

}
