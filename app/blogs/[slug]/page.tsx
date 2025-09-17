import { notFound } from "next/navigation";
import posts from "@/data/posts.json";
import { images } from "@/data/images";
import Image from "next/image";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

type ImageKey = keyof typeof images;

export default function PostPage({ params }: PostPageProps) {
  // 1. Get the slug from URL params
  const { slug } = params;

  // 2. Find posts in JSON
  const post = posts.find((p) => p.slug === slug);
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  // 3. Handle post not found
  if (!post) {
    notFound();
  }

  return (
    <main className="font-poppins">
      <h1 className="text-4xl font-light font-cormorant">{post.title}</h1>
      <div className="relative w-full aspect-video mt-10">
        <Image
          src={images[slug as ImageKey]}
          alt={post.title}
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>

      <div className="flex justify-between dark:text-yellow-500 text-yellow-700 mt-3">
        <p>{post.author}</p>
        <p>{post.date}</p>
      </div>

      <p className="lg:text-xl text-lg mt-5 lg:text-justify">{post.content}</p>

      <div className="flex justify-between mt-10 dark:text-yellow-500 text-yellow-700 opacity-85 text-sm">
        {prevPost ? (
          <Link href={`/blogs/${prevPost.slug}`}>&larr; Previous Post</Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link href={`/blogs/${nextPost.slug}`}>Next Post &rarr;</Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}
