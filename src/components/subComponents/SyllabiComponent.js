import { useEffect, useState } from 'react';
import { getAllSyllabi } from '../../helpers/user-agent';

const SyllabiComponent = () => {

  const [syllabi, setSyllabi] = useState([]);
  
  useEffect(() => {
    async function fetchSyllabi() {
      setSyllabi( await getAllSyllabi());
    }

    fetchSyllabi();
  }, [])
  
  return (
    <div className="form-group">
      <div className="dropdown">
        <select className="select" disabled={syllabi.length === 0}  >

          <option value="default" disabled selected>
            { syllabi.length > 0 ? 'Choose Syllabus' : 'Fetching Data ...' }
          </option>

          {
            syllabi.map((syllabus, index) => (
              <option key={index} value={index}>{syllabus}</option>
            ))
          }

        </select>
      </div>
    </div>
  );
};

export default SyllabiComponent;
