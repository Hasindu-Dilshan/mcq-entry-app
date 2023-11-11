import { connect } from "react-redux";
import { TOPIC_CHOOSE } from "../../constants/actionTypes";
import { useEffect } from "react";

const mapDispatchToProps = (dispatch) => ({
  onTopicChange: (topicId, topicName) =>
    dispatch({
      type: TOPIC_CHOOSE,
      payload: { topicId, topicName },
    }),
});

const TopicsComponent = (props) => {


  // useEffect(() => {
  //   async function fetchTopics() {
  //     setTopics( await getTopics(1,2012));
  //   }

  //   fetchTopics();
  // }, []);

  // useEffect (() => {
  //   console.log(props.topics)
  // }, [props.topics])

  function onSelectChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];

    const topicId = selectedOption.getAttribute('value');
    const topicName = selectedOption.innerHTML;
    
    props.onTopicChange(topicId, topicName);
  }

  return (
    <div className="form-group">
      <div className="dropdown">

        <select className="select" disabled={props.topics?.length === 0} defaultValue={ "default" } onChange={onSelectChange}>

          <option value="default" disabled>
            { 
              props?.topics?.length !==0 ? 
                'Choose Topic' 
                : 'Fetching Data ...' 
            }
          </option>

          {
            props?.topics?.map((topic, index) => (
              <option key={index} value={index}>{topic}</option>
            ))
          }

        </select>

      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TopicsComponent);
