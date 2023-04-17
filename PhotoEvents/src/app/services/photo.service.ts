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
  create(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(this.url, photo).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => 'hello'

        );
      })
    );
  }

  destroy(photoId: number): Observable<Object> {
    return this.http.delete(this.baseUrl + 'api/delete/' + photoId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.create(): Error creating todos:' + err)
        );
      })
    );
  }

  update(photo: Photo) {
    console.log(Photo);
    return this.http.post<Photo>(this.baseUrl + 'api/updatePhoto/' + photo.id, photo).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.create(): Error creating todos:' + err)
        );
      })
    );
  }
}
