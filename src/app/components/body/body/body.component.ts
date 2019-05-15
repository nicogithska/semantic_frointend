import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

/*
  test: Profile = {
    id: 1,
    name: 'joe',
    nachname: 'doe',
  };

  test2: Profile = {
    id: 2,
    name: 'hans',
    nachname: 'johann',
  };

  test3: Profile = {
    id: 3,
    name: 'hans',
    nachname: 'johann',
  };

  test4: Profile = {
    id: 4,
    name: 'hans',
    nachname: 'johann',
  };

  profiles: Profile[] = [this.test, this.test2, this.test3, this.test4];
*/

  profiles: Profile[];
  skill: string;

  constructor(
    private semanticSearchService: SeamnticSearchService,
    private skillService: SkillService) { }

  ngOnInit(): void {
    this.profiles = this.semanticSearchService.search();
  }

  addSkill() {
    let toBeAddedSkill = new Skill();
    toBeAddedSkill.name = this.skill;
    this.skillService.addSkill(toBeAddedSkill);
  }

  removeSkill(skill: string) {
    this.skillService.removeSkill(skill);
  }

  resetSkills() {
    this.skillService.resetAll();
  }

  search () {
    console.log('Will work soon :^) !');
  }

}

