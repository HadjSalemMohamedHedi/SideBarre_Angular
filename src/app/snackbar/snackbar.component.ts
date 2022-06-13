import { Component, Input, OnInit } from '@angular/core';

import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showInfo() {
    this.toastr.info(' Info', 'Major Info', {
      timeOut: 3000,
    });
  }

  showWarning() {
    this.toastr.warning('Warning', 'Major Warning', {
      timeOut: 3000,
    });
  }


  showError() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }


}
