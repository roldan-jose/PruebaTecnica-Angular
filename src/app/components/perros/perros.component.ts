import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { resourceUsage } from 'process';
import { IPerros } from 'src/app/models/perros.interface';
import { PerrosServiceService } from 'src/app/services/perros-service.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
  listPerros: IPerros = {} as IPerros;
  listPerroOne: IPerros = {} as IPerros;
  constructor(private PerrosService: PerrosServiceService) { }

  ngOnInit(): void {
    this.GetPerros();
    this.GetPerroOne();
  }

  GetPerros(): void{
    this.PerrosService.ListPerros().subscribe((response: IPerros) => {
      // console.log(response.message);
      this.listPerros = response.message;
    });
  }
  GetPerroOne(): void{
    this.PerrosService.ListPerroOne().subscribe((res: IPerros) => {
      this.listPerroOne = res.message;
    });
  }
}
