import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReligionService {
    token: string

    constructor(
        private _http: HttpClient
    ) {
        this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTcxNTQ4NjcsImlkIjoiMSIsIm9yaWdfaWF0IjoxNTU0NTYyODY3fQ.jp16UYRM0WrLzLjyxqDD8GS02zYr567gX0JgMPIfSRY"
    }

    loadListReligion(ParamReq: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        }

        return this._http
            .get("http://localhost:9084/api/agama/list/" + ParamReq, httpOptions)
    }

    AddReligion(ParamReq: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        }

        return this._http
            .post("http://localhost:9084/api/agama/add", ParamReq, httpOptions)
    }

    EditReligion(ParamReq: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        }

        return this._http
            .post("http://localhost:9084/api/agama/edit", ParamReq, httpOptions)
    }

    DeleteReligion(ParamReq: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        }

        return this._http
            .post("http://localhost:9084/api/agama/delete", ParamReq, httpOptions)
    }
}