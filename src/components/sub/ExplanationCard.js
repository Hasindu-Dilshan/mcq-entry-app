import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ImageUploadModal from "../modal/ImageUploadModal";
import { Link } from "react-router-dom";

function ExplanationCard ({explanationImage, setExplanationImage, explanationInputRef}) {

  /**
   * This property is component specific
   * Example : Explanation Card component has multiple images,
   * while Answer Component has only single image
   */
  const hasMultipleImages = false; 

  
  return (
    <>
      <div className="col-xl-12 col-sm-12 col-12 mt-5">
        <div className="card">
          <div className="card-header">
            <div className="card-titles nested-card-title">Explanation</div>
          </div>
          <div className="card-body">
            <div className="form-group">
              <textarea ref={explanationInputRef} rows="3" cols="50" className="form-control"></textarea>
            </div>
            <div className="actionset">
              <label>
                <Link className="action_label5" data-toggle="modal" data-target="#upload-image">
                  Upload 
                  <FeatherIcon icon="edit" />
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>

      <ImageUploadModal images={explanationImage} setImages={setExplanationImage} hasMultipleImages={hasMultipleImages}/>
    </>
    
  );
};

export default ExplanationCard;
