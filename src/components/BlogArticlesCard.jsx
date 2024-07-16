import Paragraph from "../reusable components/Paragraph";
import { Link } from "react-router-dom";

const BlogArticlesCard = (props) => {
  const { image, title, description, author, link, col } = props;
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className={`${col ? "flex gap-7" : "block"}`}>
        <div>
          <img src={image} alt="" className="mb-4 w-full" />
        </div>
        <div>
          <p className="mb-3 text-3xl text-black font-semibold">{title}</p>
          <span className="block mb-3 text-primary font-semibold">
            By {author}
          </span>
          <Paragraph className="text-gray-800 mb-4">{description}</Paragraph>
          <Link to={link}>
            <button className="text-primary text-base">Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlesCard;
