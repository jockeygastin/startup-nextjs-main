import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const profileBlog = ({ blog }: { blog: Blog }) => {
  const { title, image,bullet1,bullet2,bullet3,bullet4, author, publishDate } = blog;
  return (
    <>
 <div className="group relative overflow-hidden rounded-xl bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-five border-8 dark:border-none hover:shadow-two">
  <div className="flex  bg-green-200 dark:bg-gray-800">
    <Link
      href="/blog-"
      className="relative block h-60 w-60"
    >
      <Image src={image} loading="lazy" alt="image" fill className="object-cover  rounded-full" />
    </Link>
    <div className="w-1/2 p-6 sm:p-8 md:px-6 md:py-10 lg:p-10 xl:px-5 xl:py-10 2xl:p-10 flex flex-col justify-center">
  <h3 className="mt-6 mb-4 text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
    {title}
  </h3>
  <p className="mt-4 text-base font-medium text-body-color dark:text-white">
    {bullet1}
  
  </p>
  <p className="mt-1 text-base font-medium text-body-color dark:text-white">
    {bullet2}
  
  </p>
</div>


  </div>
  <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
    <p className="mb-6 border-b border-body-color border-opacity-10 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
      {bullet3}
    </p>
    <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
      {bullet4}
    </p>

    <div className="flex items-center">
      <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
        <div className="mr-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={author.image}  loading="lazy" alt="author" fill className="rounded-full" />
          </div>
        </div>
        <div className="w-full">
          <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
             {author.name}
          </h4>
          <p className="text-xs text-body-color">{author.designation}</p>
        </div>
      </div>
      {/* <div className="inline-block">
        <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
          Date
        </h4>
        <p className="text-xs text-body-color">{publishDate}</p>
      </div> */}
    </div>
  </div>
</div>


      <br />
    </>
  );
};

export default profileBlog;

