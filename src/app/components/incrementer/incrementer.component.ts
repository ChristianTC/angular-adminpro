import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('value') progress: number = 20;
  @Input() btnClass: string = 'btn-primary';

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
