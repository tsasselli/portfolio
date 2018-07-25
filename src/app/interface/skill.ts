import { SkillService } from './../services/skill.service';
export interface Skill {
    title: string,
    cardImage: string,
    projects: string[];
    flip: string;
    skillsList: string[];
}