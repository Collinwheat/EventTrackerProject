import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private baseUrl = 'http://localhost:8086/';
  private url = this.baseUrl + 'api/photographs';

  constructor(
    private http: HttpClient
  ) {}

  index(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'PokemonService.index(): error retrieving pokemon: ' + err
            )
        );
      })
    );
  }
}
