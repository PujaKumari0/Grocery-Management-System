import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://localhost/gmsApi/';

  constructor(  
    private  http : HttpClient
  ) { }

  get_party(){
    return  this.http.get(this.baseurl+'party_view.php');
  }
  get_single_party(partyid:any){
    return  this.http.get(this.baseurl+'party_view.php?partyid='+partyid);
  }
  post_party(data:any){
    return this.http.post(this.baseurl + 'insert_party.php',data)   
  }
  put_party(data:any){
    return this.http.put(this.baseurl + 'party_update.php',data)   
  }


  get_category(){
    return this.http.get(this.baseurl + 'category_view.php');
  }
  post_category(data:any){
    return this.http.post(this.baseurl + 'insert_category.php',data)   
  }

  get_item(){
    return this.http.get(this.baseurl + 'item_view.php')
  }
  post_item(data:any){
    console.log(data)
    return this.http.post(this.baseurl + 'insert_item.php',data)
  }
  get_customer(){
    return this.http.get(this.baseurl + 'customer_view.php')
  }
  post_customer(data:any){
    return this.http.post(this.baseurl + 'insert_customer.php',data)
  }
  get_employee(){
    return this.http.get(this.baseurl +'employee_view.php')
  }
  post_employee(data:any){
    return this.http.post(this.baseurl + 'employee_insert.php',data)
  }
  get_salary(){
    return this.http.get(this.baseurl +'salary_view.php')
  }
  post_salry(data:any){
    return this.http.post(this.baseurl + 'salary_insert.php',data)
  }
  get_dues(){
    return this.http.get(this.baseurl +'dues_view.php')
  }
  post_dues(data:any){
    return this.http.post(this.baseurl + 'dues_insert.php',data)
  }
  get_stock(){
    return this.http.get(this.baseurl +'stock_view.php') 
  }
  post_stock(data:any){
    return this.http.post(this.baseurl + 'sale_insert.php',data)
  }

  get_sale(){
    return this.http.get(this.baseurl +'sale_view.php') 
  }
  post_sale(data:any){
    return this.http.post(this.baseurl + 'sale_insert.php',data)
  }
  get_order(){
    return this.http.get(this.baseurl +'order_view.php') 
  }
  post_order(data:any){
    return this.http.post(this.baseurl + 'order_insert.php',data)
  }

  get_deliver(){
    return this.http.get(this.baseurl +'deliver_view.php') 
  }
  post_deliver(data:any){
    return this.http.post(this.baseurl + 'deliver_insert.php',data)
  }

  get_expense(){
    return this.http.get(this.baseurl +'expense_view.php') 
  }
  post_expense(data:any){
    return this.http.post(this.baseurl + 'expense_insert.php',data)
  }

  check_admin_login(data:any){
    return this.http.post(this.baseurl + 'admin_login.php',data)
  }
}
