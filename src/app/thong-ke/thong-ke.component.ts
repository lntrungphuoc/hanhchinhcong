import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ThongKe } from '../models/thongKe';
import { ThongKeSerivce } from '../services/thongKe.service';

@Component({
  selector: 'app-thong-ke',
  templateUrl: './thong-ke.component.html',
  styleUrls: ['./thong-ke.component.css']
})
export class ThongKeComponent {
  listThongKe1: ThongKe[];
  listThongKe2: ThongKe[];
  listThongKe3: ThongKe[];
  listThongKe4: ThongKe[];

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private thongKeService: ThongKeSerivce) { }

  ngOnInit(): void {
    this.thongKeService.getAll1().subscribe((res) => {
      this.listThongKe1 = res;
      $(function () {
        $("#thong-ke1-table").DataTable();
      });
      this.dtTrigger.next(void 0);
    });
    
    this.thongKeService.getAll2().subscribe((res) => {
      this.listThongKe2 = res;
      $(function () {
        $("#thong-ke2-table").DataTable();
      });
      this.dtTrigger.next(void 0);
    });
    
    this.thongKeService.getAll3().subscribe((res) => {
      this.listThongKe3 = res;
      $(function () {
        $("#thong-ke3-table").DataTable();
      });
      this.dtTrigger.next(void 0);
    });
    
    this.thongKeService.getAll4().subscribe((res) => {
      this.listThongKe4 = res;
      $(function () {
        $("#thong-ke4-table").DataTable();
      });
      this.dtTrigger.next(void 0);
    });
  }

  thongKe(form: any) {
    var data = form.value;
    var startDate = data.startDate;
    var endDate = data.endDate;
    this.thongKeService.thongKe1(startDate, endDate).subscribe((res) => {
      this.listThongKe1 = res;
    });
    
    this.thongKeService.thongKe2(startDate, endDate).subscribe((res) => {
      this.listThongKe2 = res;
    });
    
    this.thongKeService.thongKe3(startDate, endDate).subscribe((res) => {
      this.listThongKe3 = res;
    });
    
    this.thongKeService.thongKe3(startDate, endDate).subscribe((res) => {
      this.listThongKe3 = res;
    });
  }
}
