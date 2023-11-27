import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  constructor( private route: ActivatedRoute) {

  }
  detailId: string | undefined;
  initialValue:string | undefined;

  ngOnInit(): void {
    this.initialValue='123'
    const detailId= this.route.snapshot.paramMap.get('detailId');
    if(detailId) {
      this.detailId= detailId;
    }
  }
}
