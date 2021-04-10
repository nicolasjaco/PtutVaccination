import { Component, Inject, OnInit, Type } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogRappelComponent } from "src/app/components/dialog-rappel/dialog-rappel.component";
import { AjoutVaccinComponent } from "src/app/components/ajout-vaccin/ajout-vaccin.component";
import { User } from "src/app/model/user";
import { UsersService } from "src/app/services/users.service";
import { MaladieCalendrier } from "src/app/model/maladiecalendrier";
import { MaladiecalendrierService } from "src/app/services/maladiecalendrier.service";
import { Maladie } from "src/app/model/maladie";
import { MaladieService } from "src/app/services/maladie.service";
import { Vaccin } from "src/app/model/vaccin";
import { VaccinsService } from "src/app/services/vaccins.service";

@Component({
  selector: "app-calendrier",
  templateUrl: "./calendrier.component.html",
  styleUrls: ["./calendrier.component.css"],
})
export class CalendrierComponent implements OnInit {
  panelOpenState: boolean = false;
  user: User = <User>{};
  maladiecldr: Array<MaladieCalendrier> = [];
  vaccins: Array<Vaccin> = [];

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService,
    private maladieCalendrier: MaladiecalendrierService,
    private vaccinsService: VaccinsService
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
      console.log(data[0].datedenaissance);
      //this.calcAgeMonth();
    });
    //TODO:remplacer par idutilisateur
    this.maladieCalendrier
      .getMaladieCalendrierForUser(1)
      .subscribe((data: any) => {
        this.maladiecldr = data;
        console.log(this.maladiecldr);
        this.maladiecldr.forEach((maladie) => {
          this.vaccinsService
            .getVaccinsByMaladie(maladie.idmaladie)
            .subscribe((data: any) => {
              this.vaccins = data;
            });
        });
      });
  }
  //calcAgeMonth() {
  //  let timeDiff = Math.abs(Date.now() - this.user.datedenaissance.getTime());
  // let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 30.4375);
  //return age;
  // }
}
