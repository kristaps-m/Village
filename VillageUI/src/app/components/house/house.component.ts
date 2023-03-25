import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  

  ngOnInit() {
    this.route.params.subscribe((params) =>
      {
        console.log(params);
      }
    );
  }
}
