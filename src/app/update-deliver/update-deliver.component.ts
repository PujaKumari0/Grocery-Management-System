import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-deliver',
  templateUrl: './update-deliver.component.html',
  styleUrls: ['./update-deliver.component.css']
})
export class UpdateDeliverComponent implements OnInit {
  FormBuilder: any;
  deliver_form!: FormGroup
  // Fb: any;

  constructor(
    private Fb: FormBuilder,
    private Service: ApiService,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.deliver_form = this.Fb.group({
      deliver_date: ['', Validators.required],
      deliver_address: ['', Validators.required],
      deliver_qty: ['', Validators.required],
      admin_id_fk: [1]
    })
  }
  onsubmit() {
    console.log(this.deliver_form.value)
    this.Service.post_deliver(this.deliver_form.value).subscribe(
      (res: any) => {
        console.log(res)
        alert('data insert successfully...')
      },
      (error: any) => {
        console.log(error)
        alert('data not insert')
      }
    )
  }
  resetform() {
    this.deliver_form.reset();
  }
}

