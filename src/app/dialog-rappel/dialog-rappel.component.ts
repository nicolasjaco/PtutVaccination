import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-rappel',
  templateUrl: './dialog-rappel.component.html',
  styleUrls: ['./dialog-rappel.component.css']
})
export class DialogRappelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogRappelComponent>) { }
  close(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
