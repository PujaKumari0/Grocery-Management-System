
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit{
  FormBuilder: any;
  item_form!:FormGroup

  constructor(
     private fb: FormBuilder,
     private service:ApiService,
     private router:Router

  ){}


  ngOnInit(): void {
   this.item_form = this.fb.group({
    item_name:['',Validators.required],
    item_rate:['',Validators.required],
    item_desc:['',Validators.required],
    unit_id_fk:['1',Validators.required],
    cat_id_fk:['2',Validators.required],
    admin_id_fk:['1',Validators.required]
   })
  }

  submitform(){
    console.log(this.item_form.value)
    this.service.post_item(this.item_form.value).subscribe(
      (res:any)=>{
        this.item_form.reset();
        console.log(res)
      }
    )
  }
  resetform(){
    this.item_form.reset();
  }
}
