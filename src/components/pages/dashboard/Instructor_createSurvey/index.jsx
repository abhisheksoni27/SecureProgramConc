import NProgress from 'nProgress';

module.exports = {
  path: '/dashboard/Instructor_createSurvey',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	NProgress.done();
      cb(null, require('./Instructor_createSurvey'));
    });
  }
}
