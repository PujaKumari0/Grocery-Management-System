import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  FormBuilder: any;
  order_form!: FormGroup
  constructor(
    private fb: FormBuilder,
    private service: ApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.order_form = this.fb.group({
      cust_id_fk: ['2'],
      item_id_fk: ['3'],
      order_item: ['', Validators.required],
      order_date: ['', Validators.required],
      order_qty: ['', Validators.required],
      deliver_date: ['', Validators.required],
      admin_id_fk: ['1']
    })
  }
  submit() {
    console.log(this.order_form.value)
    this.service.post_order(this.order_form.value).subscribe(
      (res: any) => {
        console.log(res)
        alert('data insert successfully..')
      },
      (error:any)=>{
        console.log(error)
        alert('data not insert')
      }
    )
    
  }
  resetform() {
    this.order_form.reset();
  }

}
