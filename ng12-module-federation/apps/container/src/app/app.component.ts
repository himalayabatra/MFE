import { Component, OnInit } from '@angular/core';
import { SharedService } from '@ng12-module-fed/corelib';
import { DynamicLoader } from '@ng12-module-fed/corelib';

@Component({
  selector: 'ng12-module-fed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'container';
  appDetail = {
    path: '/remote/remoteEntry.js',
    name: 'remote',
    component: 'RemoteComponent',
    input: { name: 'Himalaya Batra' },
    output: {
      emitclick: () => {
        console.log('star clicked');
      },
    },
  };
  leftnavDetail = {
    path: '/leftnav/leftNav.js',
    name: 'leftnav',
    component: 'LeftNavComponent',
  };

  constructor(
    private sharedService: SharedService,
    private loader: DynamicLoader
  ) {
    this.sharedService.id = 'container';
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // this.loader.loadModule({ module: 'RemoteAnimateModule', path: '/animate' });
    // setTimeout(() => {
    //   this.loader.loadModule({ module: 'RemoteModule', path: '/search' });
    // }, 10000);
  }
}
