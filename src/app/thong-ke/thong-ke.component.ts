import { Component, OnInit, ViewChild } from '@angular/core';
import { ThongKe } from '../models/thongKe';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ThongKeSerivce } from '../services/thongKe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-thong-ke',
  templateUrl: './thong-ke.component.html',
  styleUrls: ['./thong-ke.component.css']
})
export class ThongKeComponent implements OnInit {
  listThongKe: ThongKe[];

  startDate: Date;
  endDate: Date;
  stringStartDate: string | null;
  stringEndDate: string | null;
  loaiThongKe: string | null;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private thongKeService: ThongKeSerivce,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    private location: Location) { }

  ngOnInit(): void {
    // this.toggleRefresh()
    // Lấy data từ param lúc mới vào trang thống kê
    this.route.queryParams.subscribe(params => {
      this.startDate = params['startDate']
      this.endDate = params['endDate']
      this.loaiThongKe = params['type']
    });

    // Xử lý trường hợp nếu ngày tháng bị null
    if (this.startDate == null && this.endDate == null) {
      this.startDate = new Date();
      this.startDate.setDate(this.startDate.getDate() - 10);
      this.endDate = new Date();
    }

    // Format ngày tháng
    this.stringStartDate = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
    this.stringEndDate = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');
    
    if (this.loaiThongKe == 'treHan') {
      this.thongKeService.thongKeTreHan(this.stringStartDate!, this.stringEndDate!).subscribe(
        (res) => {
          this.listThongKe = res;
          $(function () {
            $("#thong-ke1-table").DataTable();
          });
          // this.toggleRefresh()
        }
      );
    } else if (this.loaiThongKe == 'dungHan') {
      this.thongKeService.thongKeDungHan(this.stringStartDate!, this.stringEndDate!).subscribe(
        (res) => {
          this.listThongKe = res;
          $(function () {
            $("#thong-ke1-table").DataTable();
          });
          // this.toggleRefresh()
        }
      );
    } else {
      this.thongKeService.thongKeDangKi(this.stringStartDate!, this.stringEndDate!).subscribe(
        (res) => {
          this.listThongKe = res;
          $(function () {
            $("#thong-ke1-table").DataTable();
          });
          // this.toggleRefresh()
        }
      );
    }
  }

  thongKe() {
    // Format ngày tháng
    this.stringStartDate = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
    this.stringEndDate = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');

    if (this.startDate == null || this.endDate == null || this.startDate > this.endDate) {
      alert("Vui lòng nhập đúng định dạng");
    }
    else {
      this.router.navigateByUrl("thong-ke?startDate=" + this.stringStartDate + "&endDate=" + this.stringEndDate);
    }
  }

  thongKeDangKy() {
    this.stringStartDate = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
    this.stringEndDate = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');

    if (this.startDate == null || this.endDate == null || this.startDate > this.endDate) {
      alert("Vui lòng nhập đúng định dạng");
    } else {
      this.thongKeService.thongKeDangKi(this.stringStartDate!, this.stringEndDate!).subscribe(
        (res) => {
          this.listThongKe = res;
        }
      );
      this.location.replaceState("thong-ke?startDate=" + this.stringStartDate + "&endDate=" + this.stringEndDate + "&type=dangKy")
      // this.router.navigateByUrl("thong-ke?startDate=" + this.stringStartDate + "&endDate=" + this.stringEndDate + "&type=dangKy");
      window.location.reload();
    }
  }

  thongKeTreHan() {
    this.stringStartDate = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
    this.stringEndDate = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');

    if (this.startDate == null || this.endDate == null || this.startDate > this.endDate) {
      alert("Vui lòng nhập đúng định dạng");
    } else {
      this.thongKeService.thongKeTreHan(this.stringStartDate!, this.stringEndDate!).subscribe(
        (res) => {
          this.listThongKe = res;
        }
      );
      this.location.replaceState("thong-ke?startDate=" + this.stringStartDate + "&endDate=" + this.stringEndDate + "&type=treHan")
      // this.router.navigateByUrl("thong-ke?startDate=" + this.stringStartDate + "&endDate=" + this.stringEndDate + "&type=treHan");
      window.location.reload();
    }
  }

  thongKeDungHan() {
    this.stringStartDate = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
    this.stringEndDate = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');

    if (this.startDate == null || this.endDate == null || this.startDate > this.endDate) {
      alert("Vui lòng nhập đúng định dạng");
    } else {
      this.thongKeService.thongKeDungHan(this.stringStartDate!, this.stringEndDate!).subscribe(
        (res) => {
          this.listThongKe = res;
        }
      );
      this.location.replaceState("thong-ke?startDate=" + this.stringStartDate + "&endDate=" + this.stringEndDate + "&type=dungHan")
      // this.router.navigateByUrl("thong-ke?startDate=" + this.stringStartDate + "&endDate=" + this.stringEndDate + "&type=dungHan");
      window.location.reload();
    }
  }

  toggleRefresh() {
    if (localStorage.getItem('refresh') == null) {
      console.log('a')
      localStorage.setItem('refresh', 'ok');
      window.location.reload();
    } else {
      localStorage.removeItem('refresh')
    }
  }
}
