import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ThongKe } from "../models/thongKe";

@Injectable({
    providedIn: 'root',
})

export class ThongKeSerivce {
    constructor(private http: HttpClient) {}

    thongKeDangKi(dateStart: string, dateEnd: string): Observable<ThongKe[]> {
        return this.http.get<ThongKe[]>("http://localhost:5000/registration-statistics?dateStart="+dateStart+"&dateEnd="+dateEnd);
    }

    thongKeDungHan(dateStart: string, dateEnd: string): Observable<ThongKe[]> {
        return this.http.get<ThongKe[]>("http://localhost:5000/ontime-statistics?dateStart="+dateStart+"&dateEnd="+dateEnd);
    }

    thongKeTreHan(dateStart: string, dateEnd: string): Observable<ThongKe[]> {
        return this.http.get<ThongKe[]>("http://localhost:5000/late-statistics?dateStart="+dateStart+"&dateEnd="+dateEnd);
    }
}