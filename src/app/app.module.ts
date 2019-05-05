import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { SkillBoxComponent } from './components/skill-box/skill-box.component';
import { from } from 'rxjs';

import { SkillService } from './services/SkillService/skill.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SkillBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
