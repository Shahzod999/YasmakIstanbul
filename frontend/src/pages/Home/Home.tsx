import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <Navbar />

      <div>
        <div>
          <NoteCard title="Just normal title" date="3rd Apr 2024" content="Meeting on 7th April " tags="#meeting" isPinned={true} onEdit={() => {}} onDelete={() => {}} onPinNote={() => {}} />
          <NoteCard title="Just normal title" date="3rd Apr 2024" content="Meeting on 7th April " tags="#meeting" isPinned={true} onEdit={() => {}} onDelete={() => {}} onPinNote={() => {}} />
          <NoteCard title="Just normal title" date="3rd Apr 2024" content="Meeting on 7th April " tags="#meeting" isPinned={true} onEdit={() => {}} onDelete={() => {}} onPinNote={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Home;
