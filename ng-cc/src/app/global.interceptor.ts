import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // setting your request headers
    // const token:any = window.localStorage.getItem('auth_name');
    // const authReq = req.clone({headers:req.headers.set('X-Access-Token', token)})
    // return next.handle(authReq)
    return next.handle(req)
  }
}
