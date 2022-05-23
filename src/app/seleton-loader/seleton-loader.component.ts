import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleton-loader',
  template: `
    <div [ngStyle]="getMyStyles()"  class="skelt-load loader">

    </div>
  `,
  styleUrls: ['./seleton-loader.component.scss']
})
export class SeletonLoaderComponent implements OnInit {

  @Input() Cwidth: any;
  @Input() Cheight: any;
  @Input() circle: boolean | undefined;


  constructor() { }

  ngOnInit(): void {
  }


  getMyStyles(){
    const myStyles={
      'width.px':this.Cwidth ? this.Cwidth :'',
      'height.px': this.Cheight ? this.Cheight : '',
      'bordr-radius' : this.circle ? '50%' :''
    };
    return myStyles;
  }

}
