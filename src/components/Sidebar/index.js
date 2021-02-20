import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as CourseActions from  '../../store/actions/course'

const Sidebar = ( { modules, toggleLesson } ) => (
    <aside>
        {
            modules.map(module => (
                <div key={module.id}>
                    <strong> {module.title} </strong>
                    <ul>
                        {
                            module.lessons.map(lesson => (
                                <li key={lesson.id} onClick={() => toggleLesson(module, lesson)}>{lesson.title}</li>
                            ))
                        }
                    </ul>
                </div>
            ))
        }
    </aside>
);

const mapStatetoProps = state => ({ 
    modules: state.course.modules 
});

const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
})
 // bindActionCreators(CourseActions, dispatch)


export default connect(mapStatetoProps, mapDispatchToProps)(Sidebar);