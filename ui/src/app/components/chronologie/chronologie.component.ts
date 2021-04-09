import { Component, OnInit } from "@angular/core";
import { UserInjection } from "src/app/model/userinjection";
import { UserinjectionService } from "src/app/services/userinjection.service";

@Component({
  selector: "app-chronologie",
  templateUrl: "./chronologie.component.html",
  styleUrls: ["./chronologie.component.css"],
})
export class ChronologieComponent implements OnInit {
  userinjections: Array<UserInjection> = [];

  constructor(private userinjectionService: UserinjectionService) {}

  ngOnInit(): void {
    this.userinjectionService.getAllUserInjections().subscribe((data: any) => {
      this.userinjections = data;
      console.log(data);
    });
  }
}
