import { ActivatedRoute, Router } from '@angular/router';
import { ControlService } from './../control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  constructor(
    private controlService: ControlService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (param) => {
      var id = Number(param.get('id'));
      this.deleteProduto(id);
    });
  }

 deleteProduto(id: number) {
   this.controlService.delete(id).subscribe({
     next: (data) => {
       this.router.navigate([`control/list`]);
     },
     error: (error) => {
       console.log(error);
     },
   });
  }
}
