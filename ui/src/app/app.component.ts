import { Component, ViewEncapsulation } from "@angular/core";
import { User } from "./model/user";
import { UsersService } from "./services/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = "PtutVaccination";
  user = <User>{};
  currentDate = new Date();


  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getUserById(1).subscribe((data: any) => {
      this.user = {
        ...data[0],
        datedenaissance: new Date(data[0].datedenaissance),        
      };            
    });
    
  }
  calcAgeMonth() {
    let timeDiff = Math.abs(Date.now() - this.user.datedenaissance.getTime());   
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 30.4375);        
    return age;
  }


}
