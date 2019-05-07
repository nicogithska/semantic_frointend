import { Injectable } from '@angular/core';
import { Skill } from '../../models/Skill/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillList: string[] = [];

  allowedSkillNames: string[] = [
    'KVP',
    'JAVA',
    'PYTHON',
    'OR',
    'MATHE2',
  ];

  constructor() { }

  addSkill(skill: Skill) {
    let length = this.skillList.length;
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.allowedSkillNames.length; i++) {
      if (this.allowedSkillNames[i] === skill.name) {
        this.skillList.push(skill.name);
      }
    }
    if (this.skillList.length <= length) {
      console.log(`${skill.name} wurde nicht hinzugefügt. Der Skillname ist invalide!`);
    }
 }

// entfernt immer nur letztes Element --> ÜBERARBEITEN
  removeSkill(skill: Skill) {
    const index = this.skillList.findIndex(s => s === skill.name);
    this.skillList.splice(index, 1);
}

  resetAll() {
    this.skillList = [];
  }
}
