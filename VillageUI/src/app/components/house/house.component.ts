import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HouseDTO, IHouseDTO } from 'src/app/models/HouseDTO';
import { HouseDTOService } from 'src/app/services/house-dto.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  oneHouse: Observable<HouseDTO> | undefined;
  //oneHouse: IHouseDTO = new HouseDTO();

  constructor(
    private HouseDTOService: HouseDTOService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      // const id = params['id'];
      const id = params.get('id');
      //console.log(params['id'], +params['id']);
      if (id) {
        const house = this.HouseDTOService.getOneHouse(+id);
        this.oneHouse = house;
        //this.oneHouse.city = house.city;
      }
    });
  }

  // ngOnInit(): void {
  //   this.HouseDTOService.getOneHouse().subscribe(
  //     (result: IHouseDTO) => (this.oneHouse = result)
  //   );
  //   this.HouseDTOService.getLiveStream(1).subscribe(
  //     (result:HouseDTO) =>(this.test = result)
  //     );
  //   this.houseDTOs.push(this.test);
  //   console.log(this.houseDTOs, "Apple is now available");
  // }
}
