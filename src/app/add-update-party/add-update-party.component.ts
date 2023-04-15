import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-update-party',
  templateUrl: './add-update-party.component.html',
  styleUrls: ['./add-update-party.component.css']
})
export class AddUpdatePartyComponent implements OnInit {
 FormBuilder: any;
  party_form!: FormGroup;
  party_id:number=0

  constructor(
     private fb: FormBuilder,
     private service:ApiService,
     private router:Router,
     private url : ActivatedRoute


  ){}
  ngOnInit(): void {
   this.party_form = this.fb.group({
    party_id:[''], 
    party_name:['', Validators.required],
    party_mobile:['',Validators.required],
    party_address:['',Validators.required],
    party_email:['',Validators.required],
    party_a_c_no:['',Validators.required],
    party_ifsc_code:['',Validators.required], 
    admin_id_fk:['1']

   })
   this.party_id=this.url.snapshot.params['id']
   if(this.party_id){
    this.service.get_single_party(this.party_id).subscribe(
      (res:any)=>{
        console.log(res.data) 
        this.party_form.patchValue(res.data)
       } 
    )
   }
  }

  onsubmit(){
    // console.log(this.party_form.value);
    this.service.post_party(this.party_form.value).subscribe(
      (res:any)=>{
        // this.router.navigate(['../party_form']);
        console.log(res);
        alert('form successfully..')
      },
      (error:any)=>{
        console.log(error)
        alert('data not insert')
      }
    ) 
  }
  updateparty(){
    // console.log(this.party_form.value)
    this.service.put_party(this.party_form.value).subscribe(
      (res:any)=>{
        console.log(res.message)
      }
    )
    alert('okkk')
   
  }
  backform(){
    alert('okkk')
  }
  resetform(){
    this.party_form.reset();
  }
}
