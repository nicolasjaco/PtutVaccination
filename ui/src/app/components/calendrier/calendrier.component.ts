import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogRappelComponent } from "src/app/dialog-rappel/dialog-rappel.component";
import { AjoutVaccinComponent } from "src/app/components/ajout-vaccin/ajout-vaccin.component";
import { User } from "src/app/model/user";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-calendrier",
  templateUrl: "./calendrier.component.html",
  styleUrls: ["./calendrier.component.css"],
})
export class CalendrierComponent implements OnInit {
  panelOpenState: boolean = false;
  user: User = <User>{};

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService
  ) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogRappelComponent, dialogConfig);
    dialogConfig.height = "600px";
  }

  openDialogajout(): void {
    const dialogRef = this.matDialog.open(AjoutVaccinComponent, {
      width: "750px",
      height: "1000px",
    });
  }

  ngOnInit(): void {
    this.usersService.getUserById(1).subscribe((data: any) => {
      this.user = {
        ...data[0],
        datedenaissance: new Date(data[0].datedenaissance),
      };
    });
  }
}
