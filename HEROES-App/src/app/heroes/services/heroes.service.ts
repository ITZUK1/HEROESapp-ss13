import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { Hero } from "../interfaces/hero.interface";
import { environments } from "src/environments/enviroment";

@Injectable({providedIn:'root'})
export class HeroesService{

    private baseUrl:string = environments.baseUrl;

    constructor(private httpClient:HttpClient){}

    getHeroes():Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

    getHeroByid(id:string): Observable<Hero | undefined> {
        return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(Error=>of(undefined))
        );
    }

}




