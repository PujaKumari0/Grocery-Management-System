import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {

  FormBuilder:any;
  expense_form!:FormGroup

  constructor(
    private fb:FormBuilder,
    private service:ApiService,
    private router:Router
  ){}
  ngOnInit(): void {
   this.expense_form= this.fb.group({
    exp_amt:['',Validators.required],
    exp_date:['',Validators.required],
    exp_type:['',Validators.required],
    cust_id_fk:['2',Validators.required],
    admin_id_fk:['1',Validators.required]
   })
  }
  
  submit(){
    this.service.post_expense(this.expense_form.value).subscribe(
      (res:any)=>{
        console.log(res)
        alert('data insert successfully..')
        this.expense_form.reset();
        this.router.navigate(['/adminhome/expense'])
      },
      (error:any)=>{
        console.log(error)
        alert('data not insert')
      }
    )
  }
  resetform(){
    this.expense_form.reset();
  }
}
