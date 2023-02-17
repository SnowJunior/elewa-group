import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-people-section',
  templateUrl: './people-section.component.html',
  styleUrls: ['./people-section.component.scss'],
})
export class PeopleSectionComponent {

peopleTrained = 0;

peopleTrainedCountStop = setInterval(() => {
  this.peopleTrained++;

  if (this.peopleTrained == 733) {
    clearInterval(this.peopleTrainedCountStop)
  }
}, 5)

careers = 0;

careersCountStop = setInterval(() => {
  this.careers++;

  if (this.careers == 13) {
    clearInterval(this.careersCountStop)
  }
}, 1000)

projects = 0;

projectCountStop = setInterval(() => {
  this.projects++;

  if (this.projects == 200) {
    clearInterval(this.projectCountStop)
  }
}, 27)

investors = 0;

investorsCountStop = setInterval(() => {
  this.investors++;

  if (this.investors == 56) {
    clearInterval(this.investorsCountStop)
  }
}, 100)
  
}
