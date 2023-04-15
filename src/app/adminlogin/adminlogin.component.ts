import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  admin_login!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.admin_login = this.fb.group({
      uid:['',Validators.required],
      pwd:['',Validators.required]
    })
    localStorage.removeItem('token')
  }
  login(){
    this.api.check_admin_login(this.admin_login.value).subscribe(
    (res:any)=>{
      if(res.success){
        alert(res.message)
        localStorage.setItem('token',JSON.stringify(res.data))
        this.router.navigate(['/adminhome']);
      }
      else{
        alert(res.message)
      }
    });
  }
}
