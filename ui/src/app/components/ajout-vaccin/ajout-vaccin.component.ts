import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogueAjoutVaccComponent} from 'src/app/components/dialogue-ajout-vacc/dialogue-ajout-vacc.component'
@Component({
  selector: 'app-ajout-vaccin',
  templateUrl: './ajout-vaccin.component.html',
  styleUrls: ['./ajout-vaccin.component.css']
})
export class AjoutVaccinComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogajout() :void {
    const dialogRef = this.matDialog.open(DialogueAjoutVaccComponent, {
      width: '375px',
      height:'500px'
      
    });
  }

  close(){
    this.matDialog.closeAll();
  }
}
