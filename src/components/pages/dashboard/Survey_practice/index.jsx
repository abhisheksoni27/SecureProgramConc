import NProgress from 'nProgress';

module.exports = {
  path: '/dashboard/Survey_practice',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	require('nProgress').done();
      cb(null, require('./Survey'));
    });
  }
}
