import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidEmail: any = false;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      //alert('I am Called From jQuery');
      // $(window).on("load", function () {
      $(".loader-wrapper").fadeOut(2000);
      //});
    });

  }

  dnone() {
    this.invalidEmail = false;
  }

}
