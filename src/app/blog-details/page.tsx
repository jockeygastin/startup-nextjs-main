import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import ProfileBlog from "@/components/Blog/profileBlog";
import blogData1 from "@/components/Blog/blogData1";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Eavetop Infra",
  description: "Blog Details Page",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
       <><div className="bg-gray-300 dark:bg-gray-900">
          <Breadcrumb
        pageName="Profiles"
        description="Here we have a brief note of the expertise of our leaders under their
individual and combined Capacity, who altogether Joined their hands since
2016 and responsible for the fastest growth of EAVETOP INFA"
      />

      <section className="pb-[120px] pt-[10px]">
        <div className="container">
         <div className="-mx-4 flex flex-wrap justify-center">
  {blogData1.slice(0, 4).map((blog) => (
    <div
      key={blog.id}
      className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-xl my-5"
    >
      <ProfileBlog blog={blog} />
    </div>
  ))}
</div>


        </div>
      </section>
    </div>
    
    </>
  );
};

export default BlogDetailsPage;
