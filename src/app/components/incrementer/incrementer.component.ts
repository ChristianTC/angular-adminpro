import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent {
  @Input('value') progress: number = 20;

  @Output('value') valueOutput: EventEmitter<number> = new EventEmitter()

  changeValue( value: number) {
    if (this.progress>=100 && value>=0) {
      this.valueOutput.emit(100)
      return this.progress=100
    }
    if (this.progress<=0 && value<0) {
      this.valueOutput.emit(0)
      return this.progress=0
    }
    this.valueOutput.emit(this.progress + value)
    return this.progress = this.progress + value
  }
}
