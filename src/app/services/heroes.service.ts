import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { HeroeI } from '../interfaces/heroe.interface';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class HeroesService {

  heroesUrl = 'https://heroesapp-4dd24.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesapp-4dd24.firebaseio.com/heroes';
  constructor(private http: HttpClient) {}

  nuevoHeroe(heroe: HeroeI): Observable<HeroeI> {

    const body =   JSON.stringify(heroe);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
     console.log(body);
     return this.http.post<HeroeI>(this.heroesUrl, body, {headers}) .pipe(
    );

  }
  actualizarHeroe(heroe: HeroeI, key$: String): Observable<HeroeI> {

    const url = `${this.heroeUrl}/${key$}.json`;
    const body =   JSON.stringify(heroe);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
     console.log(body);
     return this.http.put<HeroeI>(url, body, {headers}) .pipe(
    );
  }

  getHeroe(key$: String) {
    const url = `${this.heroeUrl}/${key$}.json`;
    return this.http.get<HeroeI>( url );
  }

  listarHeroes() {
  return this.http.get<HeroeI>(this.heroesUrl);
  }

  borrarHeroe(key$: String) {
    const url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete<HeroeI>( url );
  }
}
