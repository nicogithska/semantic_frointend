import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SeamnticSearchService } from './services/SemanticSearchService/semanticsearch.service';
import { SkillService } from './services/SkillService/skill.service';
import { HeaderComponent } from './components/header/header/header.component';
import { BodyComponent } from './components/body/body/body.component';
import { DetailsProfileComponent } from './components/body/body/details-profile.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DetailsProfileComponent
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
