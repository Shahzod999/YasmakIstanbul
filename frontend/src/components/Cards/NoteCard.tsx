import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div>
      <div>
        <div>
          <h6>{title}</h6>
          <span>{date}</span>
        </div>

        <MdOutlinePushPin onClick={onPinNote} className={`icon ${isPinned ? "pined" : "notPined"}`} />
      </div>

      <p>{content?.slice(0, 60)}</p>

      <div>
        <div>{tags}</div>
        <div>
          <MdCreate onClick={onEdit} />
          <MdDelete onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
