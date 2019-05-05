import { Injectable } from '@angular/core';
import { Skill } from '../../model/Skill/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  SkillList: string[] = [];

  AllowedSkillNames:string[] = [
    'KVP',
    'JAVA',
    'PYTHON',
    'OR',
    'MATHE2',
  ];

  constructor() { }

  addSkill (SkillName:Skill) {
    let length = this.SkillList.length;
    for (let i = 0; i < this.AllowedSkillNames.length;i++) {
      if (this.AllowedSkillNames[i] === SkillName.skill_name) {
        this.SkillList.push(SkillName.skill_name);
      }
    }
    if(this.SkillList.length <= length) {
      console.log(`${SkillName.skill_name} wurde nicht hinzugefügt. Der Skillname ist invalide!`)
    }
 }

  removeSkill(skill:Skill) {
    let index = this.SkillList.findIndex(s => s === skill.skill_name);
    this.SkillList.splice(index, 1);
}

  resetAll() {
    this.SkillList = [];
  }
}
