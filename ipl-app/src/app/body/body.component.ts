import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../teams';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor() {}

  team = TEAMS;
  ngOnInit(): void {}
}
