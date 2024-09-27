import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of, pipe } from "rxjs";
import { Hero } from '../interfaces/hero.interface';
import { environments } from "src/environments/enviroment";

@Injectable({providedIn:'root'})
export class HeroesService{

    private baseUrl:string = environments.baseUrl;

    constructor(private httpClient:HttpClient){}



    //obtener todos los heroes
    getHeroes():Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
    }
    //obtener heroes por id
    getHeroByid(id:string): Observable<Hero | undefined> {
        return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(Error=>of(undefined))
        );
    }
    //obtener sugerencias de heroes
    getSuggestions(query:string):Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
    }
    //agregar un nuevo heroe
    addHero(hero:Hero):Observable<Hero>{
        return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`,hero)
    }
    //actualizar un heroe existente
    UpdateHero(hero:Hero):Observable<Hero>{
        if(!hero.id)throw Error ('Hero id is required');
        return this.httpClient.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`,hero)
    }
    //eliminar heroe por id 
    DeleteHeroByid(id:string):Observable<boolean>{
        return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(err=>of(false)),
            map(resp=>true)
        );
    }

}






