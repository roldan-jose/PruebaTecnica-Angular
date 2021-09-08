import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumerosComponent } from './components/numeros/numeros.component';
import { PerrosComponent } from './components/perros/perros.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TransformDataPipe } from './services/pipes/transform-data.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NumerosComponent,
    PerrosComponent,
    NavbarComponent,
    TransformDataPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
