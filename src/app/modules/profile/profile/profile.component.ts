import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hobbies: { key: string; }[];
  ngOnInit(): void {
    this.hobbies = [
    { "key": "Open-source contributions" },
    { "key": "Coding side projects" },
    { "key": "Photography/videography" },
    { "key": "Team sports" },
    { "key": "Playing music" },
    { "key": "Trekking and outdoor adventures" },
    { "key": "Traveling " },
  ]
  }
  statusLink;

 
}
