import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentDataChild!: number;

  @Output() messageEvent = new EventEmitter<number>()

  childData!: number;

  constructor() { }

  ngOnInit(): void {
    this.childData = 0;
    this.messageEvent.emit(this.childData)
  }

  onClick2Parent(){
    this.childData +=1
    this.messageEvent.emit(this.childData)
  }

  

}
