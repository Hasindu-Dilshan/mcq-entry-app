import {
    SYLLABUS_CHOOSE,
    TOPIC_CHOOSE,
    TOPIC_CHOOSE_CLEAR
} from '../constants/actionTypes';

const defaultStae = {
    subjectId: null,
    subjectName: null,
    syllabusUpdatedYear: null,
    topicId: null,
    topicName: null
}

export default (state = defaultStae, action) => {
    switch(action.type) {
        case SYLLABUS_CHOOSE:
            return {...state, subjectId: action.payload.subjectId, subjectName: action.payload.subjectName, syllabusUpdatedYear: action.payload.syllabusUpdatedYear};
        case TOPIC_CHOOSE:
            return {...state, topicId: action.payload.topicId, topicName: action.payload.topicName};
        case TOPIC_CHOOSE_CLEAR:
            return {...state, topicId: null, topicName: null}
        default:
            return state;
    }
}