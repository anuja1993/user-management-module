import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

/**
 * common service for data loading through HTTP request
 */
export class DataLoader {
  private readonly baseUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    // set base url from environment
    this.baseUrl = environment.baseUrl;
  }

  /**
   * fetch data list from API
   * @param url
   */
  fetchData<T>(url: string): Observable<T[]> {
    // load data using http GET
    return this.http.get<T[]>(this.getResourceUrl(url)).pipe(
      tap((_) => this.log('fetched data list')),
      catchError(this.handleError<T[]>(`fetched ${url}`, []))
    );
  }

  /**
   * load one data using specific id
   * @param url
   * @param id
   */
  loadData<T>(url: string, id: any): Observable<T> {
    // load one data using http GET
    return this.http.get<T>(this.getResourceUrl(url, id)).pipe(
      tap((_) => this.log(`fetched data id=${id}`)),
      catchError(this.handleError<T>(`fetched ${url} id=${id}`))
    );
  }

  /**
   * insert one data using specific id
   * @param url
   * @param data
   */
  postData<T>(url: string, data: T): Observable<T> {
    // insert one data using http POST
    return this.http
      .post<T>(this.getResourceUrl(url), data, this.httpOptions)
      .pipe(
        tap((addedDate: T) => this.log(`added data w/ id=${addedDate}`)),
        catchError(this.handleError<T>(`added ${url}`))
      );
  }

  /**
   * update one data using specific id
   * @param url
   * @param data
   * @param id
   */
  putData<T>(url: string, data: T, id: string): Observable<T> {
    // update one data using http PUT
    return this.http
      .put<T>(this.getResourceUrl(url, id), data, this.httpOptions)
      .pipe(
        tap((_) => this.log(`updated data id=${id}`)),
        catchError(this.handleError<T>(`update ${url}`))
      );
  }

  /**
   * delete one data using specific id
   * @param url
   * @param id
   */
  deleteData<T>(url: string, id: any): Observable<T> {
    // delete one data using http DELETE
    return this.http
      .delete<T>(this.getResourceUrl(url, id), this.httpOptions)
      .pipe(
        tap((_) => this.log(`deleted data id=${id}`)),
        catchError(this.handleError<T>(`update ${url}`))
      );
  }

  /**
   * return resource url by combining base url
   * @param url
   * @param resourceId
   */
  private getResourceUrl(url: string, resourceId?: any): string {
    return `${this.baseUrl + `/` + url}${resourceId ? '/' + resourceId : ''}`;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // logger service need to be implemented
  }
}
