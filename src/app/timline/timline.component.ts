import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timline',
  templateUrl: './timline.component.html',
  styleUrls: ['./timline.component.scss']
})
export class TimlineComponent implements OnInit {

  //@Input() value: any[] = [];
  value = [
    {content:'Ordred', date:'28-10-1994', statut: 'R'},
    {content:'Pick 1 ', date:'15-5-1999', statut: 'R'},
    {content:'Processing '},
    {content:'Not ordred'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
