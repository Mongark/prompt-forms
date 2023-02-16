import "./Modal.css";

export default function Modal(props: any) {
  if(!props.show) {
    return null;
  }

  return(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">
          Modal body
        </div>
        <div className="modal-footer">
          <button className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
}
