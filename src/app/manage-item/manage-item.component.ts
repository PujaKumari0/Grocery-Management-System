import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})

export class ManageItemComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'Item name','Item description','Item rate','action'];
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort

  total_count:number = 0;
  constructor(
    private service: ApiService
  ){

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.service.get_item().subscribe(
    (res:any) => {
      console.log(res.data)
      this.dataSource.data = res.data,
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
