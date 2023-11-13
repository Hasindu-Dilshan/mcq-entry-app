import { connect } from "react-redux";
import { 
  TOPIC_CHOOSE,
  TOPICS_FETCH_REQUEST, 
  TOPICS_FETCH_SUCCESS
} from "../../constants/actionTypes";
import { useEffect, useState } from "react";
import { getTopics } from "../../helpers/user-agent";

const mapStateToProps = (state) => {
  return {
    subjectId: state.topic.subjectId,
    syllabusUpdatedYear: state.topic.syllabusUpdatedYear,
    isFetchingTopics: state.topic.isFetchingTopics,
    topicId: state.topic.topicId
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchTopicChange: (topicId, topicName) =>
    dispatch({
      type: TOPIC_CHOOSE,
      payload: { topicId, topicName },
    }),
  dispatchTopicsRequest: () =>
    dispatch({
      type: TOPICS_FETCH_REQUEST
    }),
  dispatchTopicsSuccess: () =>
    dispatch({
      type: TOPICS_FETCH_SUCCESS
    })
});

const TopicsComponent = (props) => {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics(subjectId, syllabusUpdatedYear) {
      props.dispatchTopicsRequest();
      const topics = await getTopics(subjectId, syllabusUpdatedYear);
      props.dispatchTopicsSuccess();

      setTopics(topics);
    }

    if(props.subjectId && props.syllabusUpdatedYear)
      fetchTopics(props.subjectId, props.syllabusUpdatedYear);

  }, [props.subjectId, props.syllabusUpdatedYear]);

  function onSelectChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];

    const topicId = selectedOption.getAttribute('value');
    const topicName = selectedOption.innerHTML;
    
    props.dispatchTopicChange(topicId, topicName);
  }

  return (
    <div className="form-group">
      <div className="dropdown">

        <select className="select" disabled={!(props.subjectId && !props.isFetchingTopics)} defaultValue={ props.topicId || "default" } onChange={onSelectChange}>

          <option value="default" disabled>
            { 
              !props.isFetchingTopics ? (
                  'Choose Topic' 
              ) : "Fetching Topics..."
            }
          </option>

          {
             (
                topics.map((topic, index) => (
                  <option key={index} value={index}>
                    {topic}
                  </option>
                )
              )
            ) 
          }
          
        </select>

      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsComponent);
