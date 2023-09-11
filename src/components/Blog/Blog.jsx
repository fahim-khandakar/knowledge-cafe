import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_time,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="p-5 py-10 bg-slate-100 rounded-md">
      <img
        className="rounded-lg"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between my-8">
        <div className="flex items-center gap-5">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_time}</p>
          </div>
        </div>

        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={handleAddToBookmark} className="pl-2">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>

      <h3 className="text-4xl font-bold mb-5">{title}</h3>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href=""> #{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
