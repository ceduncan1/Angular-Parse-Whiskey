import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AddController from './controllers/add.controller';
import ListController from './controllers/list.controller';
import SingleController from './controllers/single.controller';


angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'CAHmLaWfo3uisjS0DLo7nIC9Qof77UZ3IxArQRLL',
        'X-Parse-REST-API-Key': 'CUCjdRKD6pNHAnjvImAGgCs2jm31f4AusDJoXdX4'
      }
    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
;