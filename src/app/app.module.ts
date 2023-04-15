import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { ViewportComponent } from './viewport/viewport.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatListModule} from '@angular/material/list';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { ManagepartyComponent } from './manageparty/manageparty.component';
import { AddUpdatePartyComponent } from './add-update-party/add-update-party.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { ManageDuesComponent } from './manage-dues/manage-dues.component';
import { UpdateDuesComponent } from './update-dues/update-dues.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { ManageSaleComponent } from './manage-sale/manage-sale.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ManageDeliverComponent } from './manage-deliver/manage-deliver.component';
import { UpdateDeliverComponent } from './update-deliver/update-deliver.component';
import { ManageExpenseComponent } from './manage-expense/manage-expense.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { UpdateSaleComponent } from './update-sale/update-sale.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ViewportComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomepageComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    EmployeeloginComponent,
    EmployeedashboardComponent,
    CustomerloginComponent,
    CustomerdashboardComponent,
    AdminhomeComponent,
    AdminsidebarComponent,
    ManagepartyComponent,
    AddUpdatePartyComponent,
    ManagecategoryComponent,
    UpdatecategoryComponent,
    ManageItemComponent,
    UpdateItemComponent,
    ManageCustomerComponent,
    UpdateCustomerComponent,
    UpdateEmployeeComponent,
    ManageSalaryComponent,
    UpdateSalaryComponent,
    ManageDuesComponent,
    UpdateDuesComponent,
    ManageStockComponent,
    UpdateStockComponent,
    ManageSaleComponent,
    ManageOrderComponent,
    UpdateOrderComponent,
    ManageDeliverComponent,
    UpdateDeliverComponent,
    ManageExpenseComponent,
    UpdateExpenseComponent,
    ManageEmployeeComponent,
    UpdateSaleComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule ,
    AppRoutingModule,
    MatCardModule ,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
