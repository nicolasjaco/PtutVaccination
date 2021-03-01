import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-ajout-vacc',
  templateUrl: './dialogue-ajout-vacc.component.html',
  styleUrls: ['./dialogue-ajout-vacc.component.css']
})
export class DialogueAjoutVaccComponent implements OnInit {

  constructor(private matDialog: MatDialog) { } 

  ngOnInit(): void {
  }
  close(){
    this.matDialog.closeAll();
  }
}
