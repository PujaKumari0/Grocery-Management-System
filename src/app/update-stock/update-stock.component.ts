import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  FormBuilder:any;
  stock_form!:FormGroup

  constructor(
    private fb:FormBuilder,
    private service:ApiService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.stock_form= this.fb.group({
      cat_id_fk:['2',Validators.required],
      item_id_fk:['4',Validators.required],
      pur_id_fk:['2',Validators.required],
      unit_id_fk:['1',Validators.required],
      available_qty:['',Validators.required],
      admin_id_fk:['1',Validators.required]
    })
  }
  onsubmitt(){
    console.log(this.stock_form.value)
    this.service.post_stock(this.stock_form.value).subscribe(
      (res:any)=>{
        this.stock_form.reset();
        console.log(res)
      }
    )
  }
  resetform(){
    this.stock_form.reset();
  }
}
 
