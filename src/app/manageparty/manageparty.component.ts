import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-manageparty',
  templateUrl: './manageparty.component.html',
  styleUrls: ['./manageparty.component.css']
})
export class ManagepartyComponent  implements OnInit, AfterViewInit{ 
  displayedColumns: string[] = ['id', 'name', 'party_mob.no', 'party_email', 'party_address', 'party_ifsc_code', 'action'];
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort

  total_count:number = 0;
  constructor(
   private api: ApiService,
  ){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

ngOnInit(): void {
  this.api.get_party().subscribe(
    (res:any)=>{
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



