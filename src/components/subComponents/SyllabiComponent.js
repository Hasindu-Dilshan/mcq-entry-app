import { useEffect, useState } from "react";
import { getAllSyllabi } from "../../helpers/user-agent";
import { getUniqueId } from "../../utils/getUniqueId";
import { connect } from "react-redux";
import {
  SYLLABUS_CHOOSE,
  SYLLABI_FETCH_REQUEST,
  SYLLABI_FETCH_SUCCESS,
} from "../../constants/actionTypes";

const mapStateToProps = (state) => {
  return {
    isFetchingSyllabi: state.topic.isFetchingSyllabi,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSyllabusChange: (
    subjectId,
    subjectName,
    syllabusUpdatedYear,
    subjectYearIndex
  ) =>
    dispatch({
      type: SYLLABUS_CHOOSE,
      payload: {
        subjectId,
        subjectName,
        syllabusUpdatedYear,
        subjectYearIndex,
      },
    }),
  dispatchSyllabiRequest: () =>
    dispatch({
      type: SYLLABI_FETCH_REQUEST,
    }),
  dispatchSyllabiSuccess: () =>
    dispatch({
      type: SYLLABI_FETCH_SUCCESS,
    }),
});

const SyllabiComponent = (props) => {
  const [subjectYearList, setSubjectYearList] = useState([{}]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchSyllabi() {
      props.dispatchSyllabiRequest();
      const data = await getAllSyllabi();
      props.dispatchSyllabiSuccess();

      const subjectYearArray = data.subjectYears
        .map((subjectYear) =>
          subjectYear.syllabusUpdatedYears.map((syllabusUpdatedYear) => {
            return {
              subjectName: subjectYear.subjectName,
              subjectId: subjectYear.subjectId,
              syllabusUpdatedYear,
              key: getUniqueId(),
            };
          })
        )
        .flat();

      setTitle(data.title);
      setSubjectYearList(subjectYearArray);
    }

    fetchSyllabi();
  }, []);

  async function onSyllabusChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];

    const subjectId = Number(selectedOption.getAttribute("subjectid"));
    const subjectName = selectedOption.getAttribute("subjectname");
    const subjectYearIndex = Number(selectedOption.getAttribute("value"));
    const syllabusUpdatedYear = Number(
      selectedOption.getAttribute("syllabusupdatedyear")
    );

    props.dispatchSyllabusChange(
      subjectId,
      subjectName,
      syllabusUpdatedYear,
      subjectYearIndex
    );
  }

  return (
    <div className="form-group">
      <div className="dropdown">
        <select
          className="select"
          disabled={props.isFetchingSyllabi}
          defaultValue={"default"}
          onChange={onSyllabusChange}
        >
          <option value="default" disabled>
            {!props.isFetchingSyllabi
              ? "Choose Syllabus"
              : "Fetching Syllabi..."}
          </option>

          {subjectYearList.map((subjectYear) => (
            <option
              subjectid={subjectYear.subjectId}
              subjectname={subjectYear.subjectName}
              syllabusupdatedyear={subjectYear.syllabusUpdatedYear}
              key={subjectYear.key}
              value={subjectYear.key}
            >
              {`${subjectYear.subjectName} ${subjectYear.syllabusUpdatedYear} ${title}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyllabiComponent);
