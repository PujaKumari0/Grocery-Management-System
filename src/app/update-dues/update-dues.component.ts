import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-dues',
  templateUrl: './update-dues.component.html',
  styleUrls: ['./update-dues.component.css']
})
export class UpdateDuesComponent implements OnInit {
   formBuilder:any;
   dues_form!:FormGroup

  constructor(
  private fb:FormBuilder,
  private service:ApiService,
  private router:Router
  ){}
  ngOnInit(): void {
  this.dues_form= this.fb.group({
    dues_months:['',Validators.required],
    dues_amt:['',Validators.required],
    emp_id_fk:['2',Validators.required],
    admin_id_fk:['1',Validators.required]
  
  })
  }
  onsubmit(){
    console.log(this.dues_form.value)
    this.service.post_dues(this.dues_form.value).subscribe(
      (res:any)=>{
        this.dues_form.reset();
        console.log(res)
      }
    )
  }
  resetform(){
    this.dues_form.reset();
  }
  
}

