import { Component, OnInit, Input } from '@angular/core';
//Services
import { SeamnticSearchService } from './services/semanticsearch/semanticsearch';
import { SkillService } from './services/SkillService/skill.service';
//Models
import { Profile } from './models/Profil/profil';
import { Skill } from './models/Skill/Skill';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SemanticSearch';
  profiles: Profile[];
  @Input() skill: string;


  constructor(
    private semanticSearchService: SeamnticSearchService,
    public skillService: SkillService) { }

  ngOnInit(): void {
    this.profiles = this.semanticSearchService.search();
  }

  addSkill() {
    let toBeAddedSkill = new Skill();
    toBeAddedSkill.name = this.skill;
    this.skillService.addSkill(toBeAddedSkill);
  }
  
  removeSkill(skill: Skill) {
    this.skillService.removeSkill(skill);
  }
  
  resetSkills() {
    this.skillService.resetAll();
  }
  
}
