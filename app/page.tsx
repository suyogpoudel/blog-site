import Image from "next/image";
import Link from "next/link";
import posts from "@/data/posts.json";
import { images } from "@/data/images";

type ImageKey = keyof typeof images;

const HomePage = () => {
  return (
    <section>
      <header className="font-cormorant text-center font-light text-4xl">
        minimal{" "}
        <span className="dark:text-yellow-500 text-yellow-700">blogs</span>{" "}
        website
      </header>
      <main>
        <div className="grid grid-cols-1 gap-12 mt-10 font-poppins">
          {posts.map((post) => (
            <div key={post.slug} className="flex gap-5 lg:flex-row flex-col">
              <Image
                src={images[post.slug as ImageKey]}
                alt={post.title}
                placeholder="blur"
                className="w-[320px] aspect-video shadow-lg dark:shadow-neutral-800/80 light:shadow-gray-500/50"
              />
              <div className="flex flex-col justify-between max-sm:gap-2">
                <p className="text-lg">{post.title}</p>
                <p className="opacity-80 text-sm">{post.excerpt}</p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="underline hover:opacity-80 active:opacity-50"
                >
                  Read More&rarr;
                </Link>
                <div className="flex justify-between items-center opacity-80 dark:text-yellow-500 text-yellow-700">
                  <p className="text-sm">{post.author}</p>
                  <p className="text-xs">{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default HomePage;
