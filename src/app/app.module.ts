import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { PrimeNgModule } from './primengmodule/primemodule.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxEchartsModule } from 'ngx-echarts';
import { NavigationError, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Daterangepicker } from 'ng2-daterangepicker';
import { MenuListItemComponent } from './features/ui/menu-list-item/menu-list-item.component';
import { FeaturesComponent } from './features/features.component';




// import { PaginationComponent } from './common/pagination/pagination/pagination.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#4974f0",
  "bgsOpacity": 0.1,
  "bgsPosition": "bottom-right",
  "bgsSize": 20,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#4974f0",
  "fgsPosition": "center-center",
  "fgsSize": 40,
  "fgsType": "rectangle-bounce",
  "gap": 10,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40,40,40,0.8)",
  "pbColor": "#4974f0",
  "pbDirection": "ltr",
  "pbThickness": 6,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    MenuListItemComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    NgApexchartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialModule,
    PrimeNgModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgMultiSelectDropDownModule.forRoot(),
    Daterangepicker,
    // PaginationComponent
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]

})
export class AppModule {
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(evt => evt instanceof NavigationError),
        map(evt => evt as NavigationError)
      )
      .subscribe(evt => {
        if (evt.error instanceof Error && evt.error.name === 'ChunkLoadError') {
          window.location.assign(evt.url);
        }
      });
  }
}
