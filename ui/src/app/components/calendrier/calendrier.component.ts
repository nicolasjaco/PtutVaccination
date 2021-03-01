import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogRappelComponent } from 'src/app/dialog-rappel/dialog-rappel.component';
import {AjoutVaccinComponent} from 'src/app/components/ajout-vaccin/ajout-vaccin.component'

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

  openDialogajout() :void {
    const dialogRef = this.matDialog.open(AjoutVaccinComponent, {
      width: '750px',
      height:'1000px'
      
    });
  }

  ngOnInit(): void {
  }  
}



