import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AirplaneRegisterComponent} from '../airplane-register/airplane-register.component';

@Component({
  selector: 'app-configuration-bar',
  templateUrl: './configuration-bar.component.html',
  styleUrls: ['./configuration-bar.component.css']
})
export class ConfigurationBarComponent implements OnInit {

  constructor(public dialogService: MatDialog) {
  }

  ngOnInit(): void {
  }

  openAirplaneRegister(): void {
    const dialogRef = this.dialogService.open(AirplaneRegisterComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialogService was closed');
    });
  }

}
