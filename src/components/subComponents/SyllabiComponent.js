import { useEffect, useState } from "react";
import { getAllSyllabi } from "../../helpers/user-agent";
import { getUniqueIndex } from "../../helpers/itemKeyCounter";
import { connect } from "react-redux";
import { SYLLABUS_CHOOSE } from "../../constants/actionTypes";


const mapDispatchToProps = (dispatch) => ({
  onSyllabusChange: (subjectId, subjectName, syllabusUpdatedYear) =>
    dispatch({
      type: SYLLABUS_CHOOSE,
      payload: { subjectId, subjectName, syllabusUpdatedYear },
    }),
});

const SyllabiComponent = (props) => {
  const [subjectYearContainer, setSubjectYearContainer] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchSyllabi() {
      const data = await getAllSyllabi();

      setSubjectYearContainer(data.subject_years);
      setTitle(data.title);
    }

    fetchSyllabi();
  }, []);

  function onSelectChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
  
    const subjectId = selectedOption.getAttribute('subjectid');
    const subjectName = selectedOption.getAttribute('subjectname');
    const syllabusUpdatedYear = selectedOption.getAttribute('syllabusupdatedyear');
    
    props.onSyllabusChange(subjectId, subjectName, syllabusUpdatedYear);
  }

  return (
    <div className="form-group">
      <div className="dropdown">
        <select className="select" disabled={subjectYearContainer.length === 0} defaultValue={ "default" } onChange={onSelectChange}>
          <option value="default" disabled>
            { subjectYearContainer.length !== 0 ? "Choose Syllabus" : "Fetching Data ..." }
          </option>

          {
            subjectYearContainer?.map((subject_year) =>
              subject_year.syllabusUpdatedYears.map((syllabusUpdatedYear) => (

                <option
                  subjectid={subject_year.subjectID}
                  subjectname={subject_year.subjectName}
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

export default connect(null, mapDispatchToProps)(SyllabiComponent);
