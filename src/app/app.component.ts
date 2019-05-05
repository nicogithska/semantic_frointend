import { Component, OnInit, Input } from '@angular/core';

import { Skill } from './model/Skill/Skill';
import { SkillService } from './services/SkillService/skill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

@Input() SkillName:string;

constructor(public skillService:SkillService) {}

ngOnInit() {

}

addSkill() {
  let ToBeAddedSkill = new Skill();
  ToBeAddedSkill.skill_name = this.SkillName;
  this.skillService.addSkill(ToBeAddedSkill);
}

removeSkill(skill:Skill) {
  this.skillService.removeSkill(skill);
}

resetSkills() {
  this.skillService.resetAll();
}

}

