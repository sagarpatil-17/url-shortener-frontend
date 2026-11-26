import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { CreateUrlRequest, CreateUrlResponse } from "../models/url.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UrlService {

    private http = inject(HttpClient);

    private readonly API_URL = environment.apiUrl;

    createShortUrl(payload: CreateUrlRequest): Observable<CreateUrlResponse> {
        return this.http.post<CreateUrlResponse>(`${this.API_URL}/urls`, payload)
    }


}