const ImageUploadModal = () => {
  return (
    <div class="customize_popup">
      <div
        class="modal fade"
        id="edit_workings"
        tabindex="-1"
        aria-labelledby="staticBackd"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackd">
                Edit Working Week
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class=" col-md-12 p-0">
                <div class="checkworking">
                  <ul>
                    <li>
                      <input type="checkbox" id="mon" checked />
                      <label for="mon">Mon</label>
                    </li>
                    <li>
                      <input type="checkbox" id="tue" checked />
                      <label for="tue">Tue</label>
                    </li>
                    <li>
                      <input type="checkbox" id="wed" checked />
                      <label for="wed">Wed</label>
                    </li>
                    <li>
                      <input type="checkbox" id="thur" checked />
                      <label for="thur">Thur</label>
                    </li>
                    <li>
                      <input type="checkbox" id="fri" checked />
                      <label for="fri">Fri</label>
                    </li>
                    <li>
                      <input type="checkbox" id="sat" />
                      <label for="sat">Sat</label>
                    </li>
                    <li>
                      <input type="checkbox" id="sun" />
                      <label for="sun">Sun</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn  btn-primary">
                Add
              </button>
              <button
                type="button"
                class="btn btn-secondary"
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
