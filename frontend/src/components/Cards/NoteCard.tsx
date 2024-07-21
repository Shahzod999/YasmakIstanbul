import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className="noteCard">
      <div className="noteCard_title">
        <div className="noteCard_title_text">
          <h6>{title}</h6>
          <span>{moment(date).format("Do MMM YYYY")}</span>
        </div>

        <MdOutlinePushPin onClick={onPinNote} className={`icon ${isPinned ? "pined" : "notPined"}`} />
      </div>

      <p>{content?.slice(0, 60)}</p>

      <div className="noteCard_tags">
        <div>{tags.map((item) => `#${item}`)}</div>
        <div className="noteCard_tags_buttons">
          <MdCreate onClick={onEdit} />
          <MdDelete onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
