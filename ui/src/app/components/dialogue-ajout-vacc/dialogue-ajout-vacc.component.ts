import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { UserInjection } from "src/app/model/userinjection";
import { UserinjectionService } from "src/app/services/userinjection.service";

@Component({
  selector: "app-dialogue-ajout-vacc",
  templateUrl: "./dialogue-ajout-vacc.component.html",
  styleUrls: ["./dialogue-ajout-vacc.component.css"],
})
export class DialogueAjoutVaccComponent implements OnInit {
  userinjections: Array<UserInjection> = [];
  userinjection = <UserInjection>{};
  dateOfInjection!: Date;
  num_lot!: number;

  constructor(
    private matDialog: MatDialog,
    private userinjectionService: UserinjectionService
  ) {}

  ngOnInit(): void {
    this.userinjectionService.getAllUserInjections().subscribe((data: any) => {
      this.userinjections = data;
    });
  }
  close() {
    this.userinjectionService
      .createUserInjection(
        this.userinjections.length,
        1,
        this.dateOfInjection,
        this.num_lot
      )
      .subscribe((data: any) => {
        this.userinjection = data[0];
      });
    console.log(this.userinjections);
    this.matDialog.closeAll();
  }
}
