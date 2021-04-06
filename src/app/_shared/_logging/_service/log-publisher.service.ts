import { LogConsole, LogLocalStorage, LogPublishers } from '../_publisher/log-publishers';
import { Injectable } from '@angular/core';

const PUBLISHERS_FILE = '/src/app/assets/log-publishers.json';

@Injectable()
export class LogPublisherService {

  // Public properties
  publishers: LogPublishers[] = [];

  constructor() {
    // Build publisher arrays
    this.buildPublishers();
  }

  // Build publisher arrays
  buildPublishers(): void {
    // Create instance of LogConsole Class
    this.publishers.push( new LogConsole() );

    // Create instance of LogLocalStorage Class
    this.publishers.push( new LogLocalStorage() );
  }
}

