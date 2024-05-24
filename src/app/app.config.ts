/// <reference types="@angular/localize" />

import { HttpBackend, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ArcUserModule } from '@arcane-auth/ngx-client';
import { NgxErrorHandlerModule } from '@luismdev/ngx-error-handler';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { environment } from '../../environments/environment';
import { routes } from './app.routing';
import { EFFECTS } from './core/store/index.effects';
import { REDUCERS } from './core/store/index.reducer';

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
      StoreModule.forRoot(REDUCERS),
      EffectsModule.forRoot(EFFECTS),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument({ maxAge: 100 }),
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
