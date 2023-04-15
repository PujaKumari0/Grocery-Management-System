import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManagepartyComponent } from './manageparty/manageparty.component';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { ManageDuesComponent } from './manage-dues/manage-dues.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { ManageSaleComponent } from './manage-sale/manage-sale.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ManageDeliverComponent } from './manage-deliver/manage-deliver.component';
import { ManageExpenseComponent } from './manage-expense/manage-expense.component'
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { AddUpdatePartyComponent } from './add-update-party/add-update-party.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { UpdateDuesComponent } from './update-dues/update-dues.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { UpdateSaleComponent } from './update-sale/update-sale.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { UpdateDeliverComponent } from './update-deliver/update-deliver.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'admindasboard', component: AdmindashboardComponent },
  { path: 'employee', component: EmployeeloginComponent },
  { path: 'employeedashboard', component: EmployeedashboardComponent },
  { path: 'customer', component: CustomerloginComponent },
  { path: 'customerlogin', component: CustomerdashboardComponent },
  // { path: 'Login', component: AdminhomeComponent },
  // {path: 'clear_party',component:ManagepartyComponent},

  {
    path: 'adminhome', 
    component: AdminhomeComponent,
     children:[
      {path:'', component:AdmindashboardComponent},
      {path:'party_table',component:ManagepartyComponent},
      {path:'edit_party/:id',component:AddUpdatePartyComponent},
      {path:'category_table',component:ManagecategoryComponent},
      {path:'dashboard', component:AdmindashboardComponent},
      {path:'add_stock', component:UpdateStockComponent},
      {path:'add_expense', component:UpdateExpenseComponent},
      {path:'add_order', component:UpdateOrderComponent},
      {path:'add_deliver', component:UpdateDeliverComponent},
      {path:'add_expense', component:UpdateExpenseComponent},
      {path:'add_dues', component:UpdateDuesComponent},
      {path:'add_salary', component:UpdateSalaryComponent},
      {path:'add_sale', component:UpdateSaleComponent},
      {path:'add_employee',component:UpdateEmployeeComponent},
      {path:'add_customer',component:UpdateCustomerComponent},
      {path:'add_item', component:UpdateItemComponent},
      {path:'add_category',component:UpdatecategoryComponent},
      {path:'add_party',component:AddUpdatePartyComponent},
      {path:'party', component:ManagepartyComponent},
      {path:'category',component:ManagecategoryComponent},
      {path:'item',component:ManageItemComponent},
      {path:'customer',component:ManageCustomerComponent},
      {path:'salary',component:ManageSalaryComponent},
      {path:'dues',component:ManageDuesComponent},
      {path:'stock',component:ManageStockComponent},
      {path:'sale',component:ManageSaleComponent},
      {path:'order',component:ManageOrderComponent},
      {path:'deliver',component:ManageDeliverComponent},
      {path:'expense',component:ManageExpenseComponent},
      {path:'employee',component:ManageEmployeeComponent}
     ]},
    {path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
