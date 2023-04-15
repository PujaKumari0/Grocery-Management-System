import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-manage-deliver',
  templateUrl: './manage-deliver.component.html',
  styleUrls: ['./manage-deliver.component.css']
})
export class ManageDeliverComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['id', 'Deliver Date','Deliver Address', 'Deliver Qty','action'];
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  total_count:number = 0;
  constructor(
    private  services :  ApiService
  ) {
 
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.services.get_deliver().subscribe(
      (res:any ) => {
        console.log(res.data)
        this.dataSource.data = res.data
        this.total_count = res.data.length;
      }
    )
  } 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
