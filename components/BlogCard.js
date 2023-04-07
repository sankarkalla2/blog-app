import Link from "next/link";

export function BlogCard({title, coverPhoto, datePublished,slug}) {
  return (
    <div>
      <Link href={"/posts" + slug}>
        <div>
          <img 
            src={coverPhoto.url}
          />
        </div>
      </Link>
    </div>
  )
}