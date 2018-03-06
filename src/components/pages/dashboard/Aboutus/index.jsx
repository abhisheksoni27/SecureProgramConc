import NProgress from 'nProgress';

module.exports = {
  path: '/dashboard/aboutus',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./Aboutus'));
    });
  }
}
