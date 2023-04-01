// import { Component } from '@angular/core';
// import {
//   ModalDismissReasons,
//   NgbDatepickerModule,
//   NgbModal,
// } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-modal',
//   standalone: true,
//   imports: [NgbDatepickerModule],
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.css'],
// })
// export class ModalComponent {
//   closeResult = '';

//   constructor(private modalService: NgbModal) {}

//   open(content: any) {
//     this.modalService
//       .open(content, { ariaLabelledBy: 'modal-basic-title' })
//       .result.then(
//         (result) => {
//           this.closeResult = `Closed with: ${result}`;
//         },
//         (reason) => {
//           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//         }
//       );
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return `with: ${reason}`;
//     }
//   }
// }

import { Component } from '@angular/core';
//import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  //constructor(public modalRef: MdbModalRef<ModalComponent>) {}
}