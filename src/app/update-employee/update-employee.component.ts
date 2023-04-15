import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent  implements OnInit{
  formBuilder:any
  employee_form!:FormGroup

  constructor(
    private fb:FormBuilder,
    private service:ApiService,
    private router:Router
    
    ){}
  ngOnInit(): void {
    this.employee_form= this.fb.group({
      emp_name:['',Validators.required],
      emp_mob_no:['',Validators.required],
      emp_email_id:['',Validators.required],
      emp_pasword:['',Validators.required],
      emp_address:['',Validators.required],
      emp_doc_type:['',Validators.required],
      emp_doc_no:['',Validators.required],
      emp_doc_upload:['',Validators.required],
      emp_img:['',Validators.required],
      emp_a_c_no:['',Validators.required],
      emp_ifsc_code:['',Validators.required],
      admin_id_fk:['1',Validators.required]
    
    })
  }
  onsubmit(){
    console.log(this.employee_form.value)
    this.service.post_employee(this.employee_form.value).subscribe(
      (res:any)=>{
        this.employee_form.reset();
        console.log(res)
      }
    )
  }
  resetform(){
    alert("okk")
  }
}
