import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ThongKe } from "../models/thongKe";
import { Data } from "@angular/router";

@Injectable({
    providedIn: 'root',
})

export class ThongKeSerivce {
    constructor(private http: HttpClient) {}

    listThongKe : ThongKe[] = 
    [
        {
            ngayDangKy: new Date("2023-06-18"),
            soLuong: 2
        },
        {
            ngayDangKy:  new Date("2023-01-19"),
            soLuong: 2
        },
        {
            ngayDangKy: new Date("2023-01-20"),
            soLuong: 1
        },
        {
            ngayDangKy: new Date("2023-01-21"),
            soLuong: 1
        },
        {
            ngayDangKy: new Date("2023-01-22"),
            soLuong: 1
        },
    ];

    getAll1(): Observable<ThongKe[]> {
        // return this.http.get<ThongKe[]>("https://localhost:5000/statistics?");
        return of(this.listThongKe);
    }

    getAll2(): Observable<ThongKe[]> {
        // return this.http.get<ThongKe[]>("https://localhost:5000/statistics?");
        return of(this.listThongKe);
    }

    getAll3(): Observable<ThongKe[]> {
        // return this.http.get<ThongKe[]>("https://localhost:5000/statistics?");
        return of(this.listThongKe);
    }

    getAll4(): Observable<ThongKe[]> {
        // return this.http.get<ThongKe[]>("https://localhost:5000/statistics?");
        return of(this.listThongKe);
    }

    thongKe1(dateStart: Date, dateEnd: Date): Observable<ThongKe[]> {
        return this.http.get<ThongKe[]>("https://localhost:5000/statistics?dateStart="+dateStart+"&dateEnd="+dateEnd);
    }

    thongKe2(dateStart: Date, dateEnd: Date): Observable<ThongKe[]> {
        return this.http.get<ThongKe[]>("https://localhost:5000/statistics?dateStart="+dateStart+"&dateEnd="+dateEnd);
    }

    thongKe3(dateStart: Date, dateEnd: Date): Observable<ThongKe[]> {
        return this.http.get<ThongKe[]>("https://localhost:5000/statistics?dateStart="+dateStart+"&dateEnd="+dateEnd);
    }

    thongKe4(dateStart: Date, dateEnd: Date): Observable<ThongKe[]> {
        return this.http.get<ThongKe[]>("https://localhost:5000/statistics?dateStart="+dateStart+"&dateEnd="+dateEnd);
    }
}