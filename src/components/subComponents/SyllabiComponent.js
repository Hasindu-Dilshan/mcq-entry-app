import { useEffect, useState } from "react";
import { getAllSyllabi } from "../../helpers/user-agent";
import { getUniqueIndex } from "../../helpers/itemKeyCounter";

const SyllabiComponent = () => {
  const [subjectYearContainer, setSubjectYearContainer] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchSyllabi() {
      const data = await getAllSyllabi();
      setTitle(data.title);

      setSubjectYearContainer(data.subject_years);
    }

    fetchSyllabi();
  }, []);

  return (
    <div className="form-group">
      <div className="dropdown">
        <select className="select" disabled={subjectYearContainer.length === 0} defaultValue={ "default" }>
          <option value="default" disabled>
            { subjectYearContainer.length !== 0 ? "Choose Syllabus" : "Fetching Data ..." }
          </option>

          {
            subjectYearContainer?.map((subject_year) =>
              subject_year.syllabusUpdatedYears.map((syllabusUpdatedYear) => (

                <option
                  subjectid={subject_year.subjectID}
                  syllabusupdatedyear={syllabusUpdatedYear}
                  key={getUniqueIndex()}
                >
                  { `${subject_year.subjectName} ${syllabusUpdatedYear} ${title}` }
                </option>

              ))
            )
          }
          
        </select>
      </div>
    </div>
  );
};

export default SyllabiComponent;
