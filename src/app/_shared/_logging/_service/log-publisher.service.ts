import { LogConsole, LogPublisher } from '../_publisher/log-publisher';
import { Injectable } from '@angular/core';

@Injectable()
export class LogPublisherService {

  // Public properties
  publishers: LogPublisher[] = [];

  constructor() {
    // Build publisher arrays
    this.buildPublishers();
  }

  // Build publisher arrays
  buildPublishers(): void {
    // Create instance of LogConsole Class
    this.publishers.push( new LogConsole() );
  }
}

