import React from "react";
import FeatherIcon from "feather-icons-react";

const ChooseSyllabusCard = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-sm-12 col-12 mb-4">
        <div className="card">
          <div className="card-header">
            <h3>Choose Syllabus</h3>
          </div>
          <div className="card-body">
            <div className="form-creation">
              <div className="form-group">
                <div className="dropdown">
                  <select className="select">
                    <option>භෞතික විද්‍යාව 2003 පැරණි නිර්දේෂය</option>
                    <option>භෞතික විද්‍යාව 2012 පැරණි නිර්දේෂය</option>
                    <option selected>භෞතික විද්‍යාව 2019 නව නිර්දේෂය</option>
                    <option>රසායන විද්‍යාව 2003 පැරණි නිර්දේෂය</option>
                    <option>රසායන විද්‍යාව 2012 පැරණි නිර්දේෂය</option>
                    <option>රසායන විද්‍යාව 2019 නව නිර්දේෂය</option>
                    <option>ජීව විද්‍යාව 2003 පැරණි නිර්දේෂය</option>
                    <option>ජීව විද්‍යාව 2012 පැරණි නිර්දේෂය</option>
                    <option>ජීව විද්‍යාව 2019 නව නිර්දේෂය</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="dropdown">
                  <select className="select">
                    <option>
                      <span>01.</span>&nbsp;මිනුම
                    </option>
                    <option selected>
                      <span>02.</span>&nbsp;යාන්ත්‍ර විද්‍යාව
                    </option>
                    <option>
                      <span>03.</span>&nbsp;දෝලන හා තරංග
                    </option>
                    <option>
                      <span>04.</span>&nbsp;තාප භෞතිකය
                    </option>
                    <option>
                      <span>05.</span>&nbsp;ගුරුත්වජ ක්ෂේත්‍ර
                    </option>
                    <option>
                      <span>06.</span>&nbsp;ස්ථිති විද්‍යුත් ක්ෂේත්‍ර
                    </option>
                    <option>
                      <span>07.</span>&nbsp;චුම්බක ක්ෂේත්‍ර
                    </option>
                    <option>
                      <span>08.</span>&nbsp;ධාරා විද්‍යුතය
                    </option>
                    <option>
                      <span>09.</span>&nbsp;ඉලෙක්ට්‍රොනික විද්‍යාව
                    </option>
                    <option>
                      <span>10.</span>&nbsp;පදාර්ථයේ යාන්ත්‍රික ගුණ
                    </option>
                    <option>
                      <span>&nbsp;11.</span>&nbsp;පදාර්ථ හා විකිරණ
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="head-link-set">
                  <a className="btn-add" href="add-employee.html">
                    <FeatherIcon icon="plus" /> Add Questions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSyllabusCard;
