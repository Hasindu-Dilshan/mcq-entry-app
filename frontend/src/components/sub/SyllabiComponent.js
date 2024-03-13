import { useEffect, useState } from "react";
import { getAllSyllabi } from "../../helpers/user-agent";
import { connect } from "react-redux";
import {
  SYLLABUS_CHOOSE,
  SYLLABI_FETCH_REQUEST,
  SYLLABI_FETCH_SUCCESS,
} from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  isFetchingSyllabi: state.topic.isFetchingSyllabi,
  subjectId: state.topic.subjectId,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSyllabusChange: (
    subjectId,
    subjectName,
    syllabusUpdatedYear,
    title
  ) =>
    dispatch({
      type: SYLLABUS_CHOOSE,
      payload: {
        subjectId,
        subjectName,
        syllabusUpdatedYear,
        title,
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

const onSyllabusChange = async (event, title, dispatchSyllabusChange) => {
  const selectedOption = event.target.options[event.target.selectedIndex];

  const subjectId = selectedOption.getAttribute("subjectid");
  const subjectName = selectedOption.getAttribute("subjectname");
  const syllabusUpdatedYear = Number(
    selectedOption.getAttribute("syllabusupdatedyear")
  );

  dispatchSyllabusChange(subjectId, subjectName, syllabusUpdatedYear, title);
};

const getSubjectYearArray = (syllabiJSON) =>
  syllabiJSON.subjectYears
    .map((subjectYear) =>
      subjectYear.syllabusUpdatedYears.map((syllabusUpdatedYear) => {
        return {
          subjectName: subjectYear.subjectName,
          subjectId: subjectYear.subjectId,
          syllabusUpdatedYear,
        };
      })
    )
    .flat()
    .map((subjectYear, index) => ({ ...subjectYear, key: index }));

const SyllabiComponent = ({
  dispatchSyllabiRequest,
  dispatchSyllabiSuccess,
  isFetchingSyllabi,
  dispatchSyllabusChange,
}) => {
  const [subjectYearList, setSubjectYearList] = useState([]);
  const [title, setTitle] = useState("");
  const [defaultOption, setDefault] = useState("default");

  useEffect(() => {
    async function fetchSyllabi() {
      dispatchSyllabiRequest();

      await getAllSyllabi()
        .then((syllabiJSON) => {
          dispatchSyllabiSuccess();
          const subjectYearArray = getSubjectYearArray(syllabiJSON);

          setTitle(syllabiJSON.title);
          setSubjectYearList(subjectYearArray);
        })
        .catch((err) => {
          alert("Syllabi not found");
        });
    }

    fetchSyllabi();
  }, []);

  return (
    <div className="form-group">
      <div className="dropdown">
        <select
          className="select"
          disabled={isFetchingSyllabi}
          defaultValue={defaultOption}
          onChange={(event) => {
            onSyllabusChange(event, title, dispatchSyllabusChange);
          }}
        >
          <option value={"default"} disabled>
            {!isFetchingSyllabi ? "Choose Syllabus" : "Fetching Syllabi..."}
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

export default connect(mapStateToProps, mapDispatchToProps)(SyllabiComponent);
