import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {
  public linkTheme = document.querySelector('#theme')
  ngOnInit(): void {
    const url = localStorage.getItem('theme') || ''
    this.linkTheme?.setAttribute('href', url)
  }

}
