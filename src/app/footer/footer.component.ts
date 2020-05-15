import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
date:Date;
  constructor() { }
  @Input('txt')
  inputText:string;
  ngOnInit(): void {
    this.date=new Date();
  }

  // @Output()
  // public outputEvent = new EventEmitter();

  // fireEvent(){
  //   this.outputEvent.emit("Event Fired");
  // }

}
