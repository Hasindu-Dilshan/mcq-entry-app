import { useEffect, useState } from "react";
import { getTopics } from "../../helpers/user-agent";

const TopicsComponent = () => {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      setTopics( await getTopics(1,2012));
    }

    fetchTopics();
  }, []);

  return (
    <div className="form-group">
      <div className="dropdown">

        <select className="select" disabled={topics.length === 0} defaultValue={ "default" } >

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

export default TopicsComponent;
