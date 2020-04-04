import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.scss']
})
export class PropertybindingComponent implements OnInit {

  public name = 'Arqam'
  public myId = "testId";
  public isDisabled = true;
  public successClass = 'successClass'
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "successClass": !this.hasError,
    "dangerClass": this.hasError,
    "special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
