import BlogArticlesCard from "../components/BlogArticlesCard";
import BlogHeader from "../components/BlogHeader";
import Heading from "../reusable components/Heading";
import { popularArticles, latestArticle, recipies } from "../data assets/Blogs";

const Blogs = () => {
  return (
    <div className="pt-[130px]">
      <BlogHeader />
      <div className="bg-[#f6f5f0]">
        <div className="container">
          <div className="py-16">
            <Heading>Popular Articles</Heading>
            <div className="grid grid-cols-3 gap-10 mb-8">
              {popularArticles.map((curArticle, index) => (
                <BlogArticlesCard
                  key={index}
                  image={curArticle.imageUrl}
                  author={curArticle.author}
                  title={curArticle.title.slice(0, 20) + "..."}
                  description={curArticle.description.slice(0, 99) + "..."}
                  link={curArticle.link}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-10">
                <div className="w-[33%]">
                  <Heading>Latest Articles</Heading>
                  {latestArticle.map((curArticle, index) => (
                    <BlogArticlesCard
                      key={index}
                      image={curArticle.imageUrl}
                      author={curArticle.author}
                      title={curArticle.title.slice(0, 20) + "..."}
                      description={curArticle.description.slice(0, 99) + "..."}
                      link={curArticle.link}
                    />
                  ))}
                </div>
                <div className="w-[66%] flex justify-between flex-col">
                  <Heading>Latest Articles</Heading>
                  {recipies.map((curArticle, index) => (
                    <BlogArticlesCard
                      key={index}
                      image={curArticle.imageUrl}
                      author={curArticle.author}
                      title={curArticle.title.slice(0, 20) + "..."}
                      description={curArticle.description.slice(0, 99) + "..."}
                      link={curArticle.link}
                      col={true}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
