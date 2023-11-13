import {
    SYLLABUS_CHOOSE,
    TOPIC_CHOOSE,
    SYLLABI_FETCH_REQUEST,
    SYLLABI_FETCH_SUCCESS,
    TOPICS_FETCH_REQUEST,
    TOPICS_FETCH_SUCCESS,
} from '../constants/actionTypes';

const defaultStae = {
    subjectId: null,
    subjectName: null,
    syllabusUpdatedYear: null,
    topicId: null,
    topicName: null,
    subjectYearIndex: null,
    isFetchingSyllabi: false,
    isFetchingTopics: false,
}

export default (state = defaultStae, action) => {
    switch(action.type) {
        case SYLLABUS_CHOOSE:
            return {
                ...state, 
                subjectId: action.payload.subjectId, 
                subjectName: action.payload.subjectName, 
                syllabusUpdatedYear: action.payload.syllabusUpdatedYear,
                subjectYearIndex: action.payload.subjectYearIndex,
                topicId: null,
                topicName: null
            };
        case TOPIC_CHOOSE:
            return {...state, topicId: action.payload.topicId, topicName: action.payload.topicName};
        case SYLLABI_FETCH_REQUEST:
            return {...state, isFetchingSyllabi: true};
        case SYLLABI_FETCH_SUCCESS:
            return {...state,  isFetchingSyllabi: false};
        case TOPICS_FETCH_REQUEST:
            return {...state, isFetchingTopics: true};
        case TOPICS_FETCH_SUCCESS:
            return {...state, isFetchingTopics: false};
        default:
            return state;
    }
}