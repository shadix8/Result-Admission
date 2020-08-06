import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { AdmissionComponent } from './admission/admission.component';
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'result', component:NameComponent  },
      
      { path: 'admission', component: AdmissionComponent },
      


    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
