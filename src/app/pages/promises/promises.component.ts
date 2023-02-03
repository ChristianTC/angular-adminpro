import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent {

  ngOnInit(): void {
    
    const promise = new Promise( (resolve, reject) => {
      if (false) {
        resolve('hello world');
      }else{
        reject('Something no works')
      }
    })

    promise.then((message) => {
      console.log(message);
    }).catch((message) => {
      console.log(message);
    })

    console.log('end');
    

  }

}
