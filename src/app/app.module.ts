import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArcUserModule } from '@arcane-auth/ngx-client';
import { NgxErrorHandlerModule } from '@luismdev/ngx-error-handler';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { environment } from '../../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { EFFECTS } from './core/store/index.effects';
import { REDUCERS } from './core/store/index.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(http: HttpBackend): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [
    { prefix: '/assets/i18n/', suffix: '.json' },
    { prefix: '/assets/auth/i18n/', suffix: '.json' },
  ]);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(REDUCERS),
    EffectsModule.forRoot(EFFECTS),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    HttpClientModule,
    ArcUserModule.forRoot({
      api: environment.api.arcaneAuth,
      login: '/auth/login',
      register: '/auth/register',
      recover: '/auth/recover',
      authRedirect: '/l/home',
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
    NgxErrorHandlerModule,
    NgbModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
