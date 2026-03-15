import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { ListadoComponent } from './listado/listado.component';
import { trackingReducer } from './reducers/tracking.reducer';
import { TrackClickDirective } from './directives/track-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    ListadoComponent,
    TrackClickDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYW5ndWxhci10ZXN0IiwiYSI6ImNsczFhIn0.test'
    }),
    StoreModule.forRoot({ tracking: trackingReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
