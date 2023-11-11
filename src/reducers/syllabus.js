import {
    SYLLABUS_CHOOSE,
    TOPIC_CHOOSE
} from '../constants/actionTypes';

const defaultStae = {
    subjectId: null,
    subjectName: null,
    syllabusUpdatedYear: null,
    topic: null,
}

export default (state = defaultStae, action) => {
    switch(action.type) {
        case SYLLABUS_CHOOSE:
            return {...state, subjectId: action.subjectId, subjectName: action.subjectName, syllabusUpdatedYear: action.syllabusUpdatedYear};
        case TOPIC_CHOOSE:
            return {...state, topic: action.topic};
        default:
            return state;
    }
}