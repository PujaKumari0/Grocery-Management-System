import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.css']
})
export class UpdateSalaryComponent implements OnInit {
  formbuilder :any
  salary_form!: FormGroup;
  constructor(
    private fb :FormBuilder,
    private service:ApiService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.salary_form = this.fb.group({
      salary_months:['',Validators.required],
      salary_amt:['',Validators.required],
      salary_insentive:['',Validators.required],
      emp_id_fk:['2',Validators.required],
      admin_id_fk:['1',Validators.required]
    })
  }
 
  onsubmit(){
    console.log(this.salary_form.value)
    this.service.post_salry(this.salary_form.value).subscribe(
      (res:any)=>{
        this.salary_form.reset();
        console.log(res)
      }
    )
  }
  resetform(){
    
  }

}

