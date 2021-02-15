import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogRappelComponent } from 'src/app/dialog-rappel/dialog-rappel.component';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  panelOpenState = false;

  constructor(private matDialog: MatDialog) { }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogRappelComponent, dialogConfig);
    dialogConfig.height='600px';
  }

  ngOnInit(): void {
  }

  

}
