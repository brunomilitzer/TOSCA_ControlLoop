import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component( {
  selector: 'tosca-app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: [ 'alert.component.scss' ]
} )
export class AlertComponent {
  closeResult: string;

  constructor( private modalService: NgbModal ) {
  }

  openDialog( content ): void {
    this.modalService.open( content, { ariaLabelledBy: 'alert-title' } ).result.then( ( result ) => {
      this.closeResult = `Closed with: ${ result }`;
    }, (reason => {
      this.closeResult = `Dismissed ${ this.getDismissReason( reason ) }`;
    }) );
  }

  private getDismissReason( reason: any ): string {
    if ( reason === ModalDismissReasons.ESC ) {
      return 'by pressing ESC';
    } else if ( reason === ModalDismissReasons.BACKDROP_CLICK ) {
      return 'by clicking backdrop';
    }

    return `with: ${ reason }`;
  }

}
