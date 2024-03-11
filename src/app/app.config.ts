import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { firstValueFrom } from 'rxjs';
import { UserInfo, remult } from 'remult';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideRemultAuthentication(),
  ],
};

function provideRemultAuthentication() {
  return {
    provide: APP_INITIALIZER,
    useFactory: (http: HttpClient) => {
      return async () => {
        return (remult.user = await firstValueFrom(
          http.get<UserInfo>('/api/currentUser')
        ));
      };
    },
    deps: [HttpClient],
    multi: true,
  };
}
