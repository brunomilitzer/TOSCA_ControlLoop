import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: [ './monitoring.component.scss' ]
} )
export class MonitoringComponent implements OnInit {
  public isCollapsed = false;

  ngOnInit(): void {
    console.log( '======== Monitoring Component Init ========' );
  }
}
