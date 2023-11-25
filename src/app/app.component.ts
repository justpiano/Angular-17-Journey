import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '123';
  isComplete = false;
  count = 0 ;
  disabled =  false;
  isShown = false;
  productList= [
    {value:'1', label:'Label1'},
    {value:'2', label:'Label2'},
    {value:'3', label:'Label3'},
    {value:'4', label:'Label4'},
  ];

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }

  completeTask() {
    this.isComplete = true;
  }

  increment () {
    this.count=++this.count;
  }

  decrement () {
    this.count=--this.count;
  }

  incrementByValue (value: number) {
    this.count= this.count + value;
  }

  toggleShown () {
    this.isShown= !this.isShown;
  }
}
