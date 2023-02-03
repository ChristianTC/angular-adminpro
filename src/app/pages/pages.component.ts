import { Component } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunctions(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {
  constructor(private settingsService: SettingService){}
  ngOnInit(): void {
    customInitFunctions()
  }

}
