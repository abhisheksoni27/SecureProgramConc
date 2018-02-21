import NProgress from 'nProgress';

module.exports = {
  path: '/dashboard/ConceptMap',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	require('nProgress').done();
      cb(null, require('./conceptmap'));
    });
  }
}
