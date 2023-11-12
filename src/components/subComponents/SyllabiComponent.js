import { useEffect, useState } from "react";
import { getAllSyllabi } from "../../helpers/user-agent";
import { getUniqueIndex } from "../../helpers/itemKeyCounter";
import { connect } from "react-redux";
import { 
  SYLLABUS_CHOOSE, 
  SYLLABI_FETCH_REQUEST, 
  SYLLABI_FETCH_SUCCESS 
} from "../../constants/actionTypes";

const mapStateToProps = (state) => {
  return {
    isFetchingSyllabi: state.topic.isFetchingSyllabi,
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSyllabusChange: (subjectId, subjectName, syllabusUpdatedYear) =>
    dispatch({
      type: SYLLABUS_CHOOSE,
      payload: { subjectId, subjectName, syllabusUpdatedYear },
    }),
  dispatchSyllabiRequest: () =>
    dispatch({
      type: SYLLABI_FETCH_REQUEST
    }),
  dispatchSyllabiSuccess: () =>
    dispatch({
      type: SYLLABI_FETCH_SUCCESS
    })
});

function getPersistedValue() {
  
}

const SyllabiComponent = (props) => {
  const [subjectYearContainer, setSubjectYearContainer] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchSyllabi() {
      props.dispatchSyllabiRequest();
      const data = await getAllSyllabi();
      props.dispatchSyllabiSuccess();

      setSubjectYearContainer(data.subject_years);
      setTitle(data.title);
    }

    fetchSyllabi();

  }, []);



  async function onSyllabusChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
  
    const subjectId = Number(selectedOption.getAttribute('subjectid'));
    const subjectName = selectedOption.getAttribute('subjectname');
    const syllabusUpdatedYear = Number(selectedOption.getAttribute('syllabusupdatedyear'));

    props.dispatchSyllabusChange(subjectId, subjectName, syllabusUpdatedYear);
  }

  return (
    <div className="form-group">
      <div className="dropdown">
        <select className="select" disabled={props.isFetchingSyllabi} defaultValue={ "default" } onChange={onSyllabusChange}>
          <option value="default" disabled>
            { !props.isFetchingSyllabi ? "Choose Syllabus" : "Fetching Syllabi..." }
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

export default connect(mapStateToProps, mapDispatchToProps)(SyllabiComponent);
