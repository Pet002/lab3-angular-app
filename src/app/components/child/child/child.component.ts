import { Component,  Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'
import { OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() parentDataChild!: number;

  @Output() messageEvent = new EventEmitter<number>()

  childData!: number;

  constructor() { console.log('Constructor Work!'); }
  ngDoCheck(): void {
    console.log('ngDoCheck Works')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Works')
  }
  ngAfterContentChecked(): void {
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
    this.childData = 0;
    this.messageEvent.emit(this.childData)
    console.log('ngOnInit Works')
  }

  onClick2Parent(){
    this.childData +=1
    this.messageEvent.emit(this.childData)
  }



}
