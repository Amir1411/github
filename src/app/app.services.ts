import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {
	apiUrl = 'https://api.github.com/';
    constructor(private http: HttpClient) { }
    
    getUserList() {
        return this.http.get(`${this.apiUrl}users?per_page=10`);
    }
    getUserDeatils(url: string) {
        return this.http.get(url);
    }
    searchUser(query: string) {
        return this.http.get(`${this.apiUrl}search/users?q=${query}`);
    }
}