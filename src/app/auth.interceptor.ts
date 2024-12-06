import { HttpInterceptorFn } from '@angular/common/http';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let authToken: string | null = null;

  // Verifica si localStorage está disponible
  if (typeof localStorage !== 'undefined') {
    authToken = localStorage.getItem('authToken'); // Obtén el token del localStorage
    console.log('Token de autenticación:', authToken);  // Verifica si el token está presente
  }

  const authReq = authToken
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      })
    : req;

  return next(authReq); // Continúa con la solicitud
};