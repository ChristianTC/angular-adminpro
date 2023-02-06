import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent {

  ngOnInit(): void {

    this.getUsers().then(users => 
      console.log(users)
    )

    // const promise = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('hello world');
    //   } else {
    //     reject('Something no works')
    //   }
    // })

    // promise.then((message) => {
    //   console.log(message);
    // }).catch((message) => {
    //   console.log(message);
    // })

    // console.log('end');
  }

  getUsers() {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(body => resolve(body.data))
      }
    )
  }

}
