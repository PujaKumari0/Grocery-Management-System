import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  login_details:any;
  constructor(
    private router:Router
  ){}
  ngOnInit(): void {
    this.login_details = localStorage.getItem('token')
  }
}
