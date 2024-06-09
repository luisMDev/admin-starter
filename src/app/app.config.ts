/// <reference types="@angular/localize" />

import { HttpBackend, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ArcUserModule } from '@arcane-auth/ngx-client';
import { NgxErrorHandlerModule } from '@luismdev/ngx-error-handler';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { environment } from '../../environments/environment';
import { routes } from './app.routing';

export function HttpLoaderFactory(http: HttpBackend): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [
    { prefix: '/assets/i18n/', suffix: '.json' },
    { prefix: '/assets/auth/i18n/', suffix: '.json' },
  ]);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom([
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpBackend],
        },
      }),
      ArcUserModule.forRoot({
        api: environment.api.arcaneAuth,
        login: '/auth/login',
        register: '/auth/register',
        recover: '/auth/recover',
        authRedirect: '/l/home',
      }),
      NgbModule,
      NgxErrorHandlerModule,
    ]),
    provideClientHydration(),
  ],
};
