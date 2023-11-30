import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FotoPokemonComponent } from './components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './components/tarjeta-pokemon/tarjeta-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    FotoPokemonComponent,
    TarjetaPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
