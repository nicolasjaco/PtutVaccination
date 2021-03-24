import { Vaccin } from "./../../model/vaccin";
import { VaccinsService } from "./../../services/vaccins.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogueAjoutVaccComponent } from "src/app/components/dialogue-ajout-vacc/dialogue-ajout-vacc.component";
@Component({
  selector: "app-ajout-vaccin",
  templateUrl: "./ajout-vaccin.component.html",
  styleUrls: ["./ajout-vaccin.component.css"],
})
export class AjoutVaccinComponent implements OnInit {
  vaccins: Array<Vaccin> = [];
  filterTerm: string = "";

  constructor(
    private matDialog: MatDialog,
    private vaccinsService: VaccinsService
  ) {}

  ngOnInit(): void {
    this.vaccinsService.getAllVaccins().subscribe((data: any) => {
      this.vaccins = data;
    });
  }

  openDialogajout(): void {
    const dialogRef = this.matDialog.open(DialogueAjoutVaccComponent, {
      width: "375px",
      height: "500px",
    });
  }

  close(): void {
    this.matDialog.closeAll();
  }
}
