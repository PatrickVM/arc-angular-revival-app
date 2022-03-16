import { Injectable } from '@angular/core';

import { Revival } from './revival';
import { REVIVALS } from './mock-revival';

import { observable, Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RevivalService {

  private revivalsUrl = 'api/revivals';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // getRevivals(): Observable<Revival[]> {
  //   const revivals = of(REVIVALS);
  //   return revivals;
  // } converted into ⬇️
  //GET revivals from server..
  getRevivals(): Observable<Revival[]> {
    return this.http.get<Revival[]>(this.revivalsUrl)
      .pipe(
        catchError(this.handleError<Revival[]>('getRevivals', []))
      );
  }

  // getRevival(id: number): Observable<Revival> {
  //   const revival = REVIVALS.find(h => h.id === id)!;
  //   return of(revival);
  // }
  //GET revival by id
  getRevival(id: number): Observable<Revival>{
    const url = `${this.revivalsUrl}/${id}`;
    return this.http.get<Revival>(url).pipe(
      tap(_ => console.log(`fetch revival id=${id}`)),
      catchError(this.handleError<Revival>(`getRevival id=${id}`))
    );
  }

  //PUT update revival on server
  updateRevival(revival: Revival): Observable<any> {
    return this.http.put(this.revivalsUrl, revival, this.httpOptions).pipe(
      tap(_ => console.log(`updated revival id=${revival.id}`)),
      catchError(this.handleError<any>('updateRevival'))
    );
  }

  // POST add revival to server
  addRevival(revival: Revival): Observable<Revival> {
    return this.http.post<Revival>(this.revivalsUrl, revival, this.httpOptions).pipe(
      tap((newRevival: Revival) => console.log(`added revival with id=${newRevival.id}`)),
      catchError(this.handleError<Revival>('addRevival'))
    );
  }

 


  // DELETE delete revival from server
  deleteRevival(id: number): Observable<Revival> {
    const url = `${this.revivalsUrl}/${id}`;
    return this.http.delete<Revival>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted revival id =${id}`)),
      catchError(this.handleError<Revival>('deleteRevival'))
    )
  }
  
  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
      
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
}
