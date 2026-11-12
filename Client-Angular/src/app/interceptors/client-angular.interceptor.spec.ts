import { TestBed } from '@angular/core/testing';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import {
  clientAngularInterceptor,
  FALLBACK_CATEGORIES,
  FALLBACK_ORDERS,
  FALLBACK_PRODUCTS,
  FALLBACK_REVIEWS,
  FALLBACK_USERS,
  resolveFallbackBody,
} from './client-angular.interceptor';
import { environment } from '../../environments/environment';
import { of, throwError } from 'rxjs';

describe('clientAngularInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => clientAngularInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('deberia crear el interceptor', () => {
    expect(interceptor).toBeTruthy();
  });

  it('debería concatenar el baseUrl a la URL de la petición', () => {
    const requestMock = new HttpRequest('GET', 'test');

    const next: HttpHandlerFn = (req) => {
      expect(req.url).toBe(`${environment.baseUrl}/test`);
      return of(new HttpResponse({ status: 200 }));
    };

    interceptor(requestMock, next).subscribe();
  });

  it('debería retornar datos de respaldo (fallback) cuando el backend no está disponible en GitHub Pages', () => {
    const requestMock = new HttpRequest('GET', 'api/users/10');
    const next: HttpHandlerFn = () => throwError(() => new Error('Network error'));

    interceptor(requestMock, next).subscribe((event) => {
      const response = event as HttpResponse<unknown>;
      expect(response.status).toBe(200);
      expect(response.body).toEqual(FALLBACK_USERS);
    });
  });

  it('debería resolver los datos de respaldo para todos los endpoints de la API', () => {
    expect(resolveFallbackBody('api/users/10')).toEqual(FALLBACK_USERS);
    expect(resolveFallbackBody('api/products/10')).toEqual(FALLBACK_PRODUCTS);
    expect(resolveFallbackBody('api/categories/10')).toEqual(FALLBACK_CATEGORIES);
    expect(resolveFallbackBody('api/reviews/10')).toEqual(FALLBACK_REVIEWS);
    expect(resolveFallbackBody('api/orders/10')).toEqual(FALLBACK_ORDERS);
    expect(resolveFallbackBody('api/unknown')).toEqual([]);
  });
});
