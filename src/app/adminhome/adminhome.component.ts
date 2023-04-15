import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{
  name:string='Puja'
  action_menu:boolean =true
  opened:boolean = true
  admin_login!:FormGroup;
  login_details: any;
  router: any;
  login_as:any;
   constructor(
    private route:Router
   ){
      if(!localStorage.getItem('token')){
        this.router.navigate(['/admin']);
      }
    }
   ngOnInit(): void {
    this.login_details = localStorage.getItem('token')
    this.login_as = JSON.parse(this.login_details)
   }
}
