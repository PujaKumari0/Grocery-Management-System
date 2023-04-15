import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent  implements OnInit{
  FormBuilder: any;
  category_form!:FormGroup

  constructor(
    private fb: FormBuilder,
    private service:ApiService,
    private router:Router
 ){}
  ngOnInit(): void {
    this.category_form = this.fb.group({
      cat_name:['',Validators.required],
      cat_desc:['',Validators.required],
      admin_id_fk:[1,Validators.required]
    })
  }

  
  submitform(){
    console.log(this.category_form.value)
    this.service.post_category(this.category_form.value).subscribe(
      (res:any)=>{
        this.category_form.reset();
        // this.router.navigate(['../category_form']);
        console.log(res)
      }
    )
  }
  resetform(){
    this.category_form.reset();
  }
}
