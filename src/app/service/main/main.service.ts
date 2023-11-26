import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor() { 
  }
  
  sum(x: number, y:number) {
    return x + y;
  }
}
