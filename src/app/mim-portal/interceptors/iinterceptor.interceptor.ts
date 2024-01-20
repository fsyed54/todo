import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from "../services/auth-service.service";

@Injectable()
export class IinterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      const authToken = this.authService.getToken();
      const authRequest = request.clone({
          headers: request.headers.set("Authorization", "Bearer " + authToken)
      });
      return next.handle(authRequest);
  }
}











