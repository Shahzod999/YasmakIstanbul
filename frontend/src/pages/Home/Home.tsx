import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import AddEditNotes from "./AddEditNotes";
import { useState } from "react";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShowm: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />

      <div>
        <div>
          <NoteCard
            title="Just normal title"
            date="3rd Apr 2024"
            content="Meeting on 7th April "
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        onClick={() =>
          setOpenAddEditModal({ isShowm: true, type: "add", data: null })
        }>
        <MdAdd />
      </button>

      <Modal
        isOpen={openAddEditModal.isShowm}
        onRequestClose={() => {}}
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2" } }}
        contentLabel="">
          
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShowm: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
