import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import AddEditNotes from "./AddEditNotes";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance.";
import Toast from "../../components/ToastMessage/Toast";
import EmptyCard from "../../components/EmptyCard/EmptyCard";

const Home = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShowm: false,
    type: "add",
    data: null,
  });

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  });

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({ isShowm: true, data: noteDetails, type: "edit" });
  };

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message,
      type,
    });
  };
  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: "",
    });
  };

  //Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  //Get all notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes");

      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  //Delete Note
  const deleteNote = async (data) => {
    const noteId = data._id;

    try {
      const response = await axiosInstance.delete("/delete-note/" + noteId);

      if (response.data && !response.data.error) {
        showToastMessage("Note Deleted successfully", "delete");
        getAllNotes();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log("An unexpected error occurred. Please try again.");
      }
    }
  };

  // search for a Note
  const onSearchNote = async (query) => {
    try {
      const response = await axiosInstance.get("/search-notes", {
        params: { query },
      });
      if (response.data && response.data.notes) {
        setIsSearch(true);
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearSearch = () => {
    setIsSearch(false);
    getAllNotes();
  };

  //pined
  const updateIsPinned = async (noteData) => {
    const noteId = noteData._id;

    try {
      const response = await axiosInstance.put("/update-note-pinned/" + noteId, {
        isPinned: !noteId.isPinned,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note updated successfully");
        getAllNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotes();
    getUserInfo();
  }, []);

  return (
    <>
      <Navbar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch} />

      <div className="noteCardHolder">
        {allNotes.length > 0 ? (
          <div className="noteCardHolder_allBox">
            {allNotes.map((item, index) => (
              <NoteCard
                key={item._id}
                title={item.title}
                date={item.createdOn}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={() => handleEdit(item)}
                onDelete={() => deleteNote(item)}
                onPinNote={() => updateIsPinned(item)}
              />
            ))}
          </div>
        ) : (
          <EmptyCard message={isSearch ? "OOps no notes find" : "Press + to put new notes"} />
        )}
      </div>

      <button onClick={() => setOpenAddEditModal({ isShowm: true, type: "add", data: null })} className="newNoteAddButton">
        <MdAdd className="icon" />
      </button>

      <Modal className="modal" isOpen={openAddEditModal.isShowm} onRequestClose={() => {}} style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2" } }} contentLabel="">
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShowm: false, type: "add", data: null });
          }}
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
        />
      </Modal>

      <Toast isShown={showToastMsg.isShown} message={showToastMsg.message} type={showToastMsg.type} onClose={handleCloseToast} />
    </>
  );
};

export default Home;
