import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child/child.component';
import { OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;
  
  textMessage!:string;
  status!: string;

  showChild!: boolean;
  
  parentData!: number;
  ChildData!: number;
  constructor() { console.log('Constructor Work!'); }
  ngDoCheck(): void {
    console.log(this.textMessage)  
    console.log('ngDoCheck Works')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Works')
  }
  ngAfterContentChecked(): void {

    //change this ID to Your ID please
    if(this.textMessage == "B6309343"){
      this.status = "Your ID is Ok"
    }else{
      this.status = "Error"
    }
    console.log('ngAfterContentChecked Works')
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Works')
  }


  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Works')
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy Works')
  }



  ngOnChanges(){
    console.log('ngOnChanges Works')
  }


  ngOnInit(): void {
    this.parentData = 0;
    this.ChildData = 0;
    console.log('ngOnInit Works')
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

  update(){
    this.showChild = !this.showChild;
    
  }

}
