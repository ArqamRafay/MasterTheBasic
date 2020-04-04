import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  public color = "blue"
  public color2 = ["red", "blue", "green", "yellow"]
  constructor() { }

  ngOnInit() {
  }

}
