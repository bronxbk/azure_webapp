import environment from './environment';
import  'bootstrap';
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .aurelia.use.plugin('aurelia-validation');


  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}