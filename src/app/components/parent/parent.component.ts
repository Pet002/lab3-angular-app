import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;

  
  parentData!: number;
  ChildData!: number;
  constructor() { }

  ngOnInit(): void {
    this.parentData = 0;
  }
  onClick2Child(){
    this.parentData += 1;
  }

  receiveData($event: number){
    this.ChildData = $event;
  }

  onClickViewChild(){
    this.childComponent.onClick2Parent();
  }

}
