import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "vaccinFilter",
})
export class VaccinFilterPipe implements PipeTransform {
  transform(value: any, input: any): any {
    if (input) {
      return value.filter((val: { nom: string }) =>
        val.nom.toLowerCase().includes(input.toLowerCase())
      );
    } else {
      return value;
    }
  }
}
