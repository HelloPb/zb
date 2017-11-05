import { environment } from '../../../../../../../environments/environment';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Request } from '@angular/http';

@Injectable()
export class HttpWrap {

  constructor(private http: Http) { }
  /**
   * Performs any type of http request. First argument is required, and can either be a url or
   * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
   * object can be provided as the 2nd argument. The options object will be merged with the values
   * of {@link BaseRequestOptions} before performing the request.
   */
  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(environment.apiUrl + url, options);
  }
  /**
   * Performs a request with `get` http method.
   */
  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(environment.apiUrl + url, options);
  }
  /**
   * Performs a request with `post` http method.
   */
  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.post(environment.apiUrl + url, body, options);
  }
  /**
   * Performs a request with `put` http method.
   */
  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(environment.apiUrl + url, body, options);
  }
  /**
   * Performs a request with `delete` http method.
   */
  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.delete(environment.apiUrl + url, options);
  }
  /**
   * Performs a request with `patch` http method.
   */
  public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(environment.apiUrl + url, body, options);
  }
  /**
   * Performs a request with `head` http method.
   */
  public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.head(environment.apiUrl + url, options);
  }
  /**
   * Performs a request with `options` http method.
   */
  public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.options(environment.apiUrl + url, options);
  }
}
