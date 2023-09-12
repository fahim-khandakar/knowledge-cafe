import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 text-center">
      <div className="mt-16">
        <h2 className="text-xl bg-slate-200 p-5 mx-5 mb-5  rounded-lg">
          Spend time on read: {readingTime} min
        </h2>
      </div>
      <h1 className="text-2xl mb-5 font-semibold">
        Bookmarked Blogs: {bookmarks.length}
      </h1>
      <div className=" text-center  rounded-lg">
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
