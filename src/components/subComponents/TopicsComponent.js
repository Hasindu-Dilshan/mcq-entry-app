import { useEffect, useState } from "react";
import { getTopics } from "../../helpers/user-agent";
import { connect } from "react-redux";
import { TOPIC_CHOOSE } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onTopicChange: (topicId, topicName) =>
    dispatch({
      type: TOPIC_CHOOSE,
      payload: { topicId, topicName },
    }),
});

const TopicsComponent = (props) => {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      setTopics( await getTopics(1,2012));
    }

    fetchTopics();
  }, []);

  function onSelectChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];

    const topicId = selectedOption.getAttribute('value');
    const topicName = selectedOption.innerHTML;
    
    props.onTopicChange(topicId, topicName);
  }

  return (
    <div className="form-group">
      <div className="dropdown">

        <select className="select" disabled={topics.length === 0} defaultValue={ "default" } onChange={onSelectChange}>

          <option value="default" disabled>
            { topics.length > 0 ? 'Choose Topic' : 'Fetching Data ...' }
          </option>

          {
            topics.map((topic, index) => (
              <option key={index} value={index}>{topic}</option>
            ))
          }

        </select>

      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TopicsComponent);
