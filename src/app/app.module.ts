import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SeamnticSearchService } from './services/semanticsearch/semanticsearch';
import { SkillService } from './services/SkillService/skill.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SeamnticSearchService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
