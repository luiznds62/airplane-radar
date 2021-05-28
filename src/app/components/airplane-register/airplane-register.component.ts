import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-airplane-register',
  templateUrl: './airplane-register.component.html',
  styleUrls: ['./airplane-register.component.css'],
})
export class AirplaneRegisterComponent implements OnInit {
  mode: any = {
    adding: false,
    editing: false,
  };

  constructor() {}

  ngOnInit(): void {}

  onNoClick(): void {}

  close() {}
}
