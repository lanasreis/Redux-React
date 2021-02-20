import { combineReducers } from 'redux';

import course from './course';
// import user from './user';

export default combineReducers({
    course,
    // user,
});


// {
//     course: { modules: [], activeLesson: {}, activeModule: {} },
//     user: { name: '', avatar: '', age: 0 }
// }