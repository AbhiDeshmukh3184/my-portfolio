import { NavItem } from './nav-item';
import { TranslateService } from '@ngx-translate/core';

export let menu: NavItem[] = [
  {
    displayName: 'Profile',
    iconName: 'person',
    route: 'portfolio/profile',
  },
    {
    displayName: 'Education',
    iconName: 'school',
    route: 'portfolio/education',
  },{
    displayName: 'Skills',
    iconName: 'lightbulb',
    route: 'portfolio/skill',
  },
  {
    displayName: 'Experience',
    iconName: 'engineering',
    route: 'portfolio/experience',
  },
];