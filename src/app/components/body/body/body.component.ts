import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { SeamnticSearchService } from '../../../services/SemanticSearchService/semanticsearch.service';
import { SkillService } from '../../../services/SkillService/skill.service';
// Models
import { Profile } from '../../../models/Profil/profil';
import { Skill } from '../../../models/Skill/Skill';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  test: Profile = {
    id: 1,
    name: 'hans',
    nachname: 'johann'
  };

  test2: Profile = {
    id: 2,
    name: 'hans',
    nachname: 'johann'
  };

  profiles: Profile[] = [this.test, this.test2];
  skill: string;

  constructor(
    private semanticSearchService: SeamnticSearchService,
    private skillService: SkillService,
    private router: Router) { }

  ngOnInit(): void {
    //this.profiles = this.semanticSearchService.search();
  }

  addSkill() {
    let toBeAddedSkill = new Skill();
    toBeAddedSkill.name = this.skill;
    this.skillService.addSkill(toBeAddedSkill);
    console.log(this.profiles.length);
  }

  removeSkill(skill: string) {
    this.skillService.removeSkill(skill);
  }

  resetSkills() {
    this.skillService.resetAll();
  }

  onClick(id: number) {
    this.router.navigate(['/details', id]);
  }
}
