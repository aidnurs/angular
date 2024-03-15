import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {dataEncapsulation: false}
      )
    ),
  ],
};

