import {Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService{
    
    
    constructor(private http:Http){}

    getData(){
       return this.http.get('https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json').map(res=>res.json());
    }
}