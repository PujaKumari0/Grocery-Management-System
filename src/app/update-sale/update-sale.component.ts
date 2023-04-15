import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-sale',
  templateUrl: './update-sale.component.html',
  styleUrls: ['./update-sale.component.css']
})
export class UpdateSaleComponent implements OnInit {

  FormBuilder :any
  sale_form!:FormGroup

  constructor(
    private fb:FormBuilder,
    private service:ApiService,
    private router:Router
    ){}
    ngOnInit(): void {
      this.sale_form= this.fb.group({
        sale_date:['',Validators.required],
        sale_amt:['',Validators.required],
        sale_discount:['',Validators.required],
        sale_gst:['',Validators.required],
        admin_id_fk:[1]
      })
    }
    onsubmit(){
      console.log(this.sale_form.value)
      this.service.post_sale(this.sale_form.value).subscribe(
        (res:any)=>{
          this.sale_form.reset();
          console.log(res)
          alert('data insert successfully...')
        }
      )
    }
    resetform(){
      this.sale_form.reset();
    }
  }
