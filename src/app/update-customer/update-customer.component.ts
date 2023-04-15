import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  formBuilder:any;
  customer_name!:FormGroup
  customer_form: any;

  constructor(
  private fb: FormBuilder,
  private service: ApiService,
  private router: Router
 
 ){}
  ngOnInit(): void {
   this.customer_form = this.fb.group({
    cust_name:['',Validators.required],
    cust_mob_no:['',Validators.required],
    cust_email:['',Validators.required],
    cust_password:['',Validators.required],
    admin_id_fk:['1',Validators.required]
   })
  }
  resetform(){
    alert('okk')
  }
  onsubmit(){
    console.log(this.customer_form.value)
    this.service.post_customer(this.customer_form.value).subscribe(
      (res:any)=>{
        // this.customer_form.reset();
        console.log(res)

      }
    )
  }
}
