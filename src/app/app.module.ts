import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReporteComponent } from './components/reporte/reporte.component';

import { APP_ROUTING } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentComponent } from './components/dialog/dialog-content/dialog-content.component';
import { DialogPdfComponent } from './components/dialog/dialog-pdf/dialog-pdf.component';
import { DialogReporteComponent } from './components/dialog/dialog-reporte/dialog-reporte.component';
import { DialogContratoComponent } from './components/dialog/dialog-contrato/dialog-contrato.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './components/contacto/contacto.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReporteComponent,
    DialogContentComponent,
    DialogPdfComponent,
    DialogReporteComponent,
    DialogContratoComponent,
    QuienesSomosComponent,
    ContactoComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
