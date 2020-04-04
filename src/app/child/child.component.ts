import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Input() public parentData;
  @Input('parentData') public myName;
  // both abovr are same 2nd wala aleas h apny marzi ka name bna skty hn 

  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit('Hy Mr Arqam Rafay i am coming from child component');
  }

}
