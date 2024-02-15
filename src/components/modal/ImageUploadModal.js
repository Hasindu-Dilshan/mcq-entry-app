import { useState } from "react";

const ImageUploadModal = ({images, setImages, hasMultipleImages}) => {
  const defaultPreview = "/assets/img/default-placeholder.png";

  const [imageUrls, setImageUrls] = useState(null);

  return (
    <div className="customize_popup">
      <div
        className="modal fade"
        id="upload-image"
        tabindex="-1"
        aria-labelledby="staticBackd"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackd">
                Upload Image
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className=" col-md-12 p-0">
                <div className="checkworking d-flex">
                  <div className="d-flex flex-column align-content-center flex-wrap">
                    <input accept="image/*" type='file' id="imgInp" onChange={(event) => {
                        
                        const imgInp = event.target;
                        const [file] = imgInp.files;

                        if (file) {
                            setImages(file);
                            
                            const previewUrl = URL.createObjectURL(file);
                            setImageUrls(previewUrl);
                        }
                      }} />

                      <p>Sample name</p>
                  </div>
                  
                  {!hasMultipleImages && <img src={imageUrls ? imageUrls : defaultPreview} alt="preview"/>}
                  
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn  btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
