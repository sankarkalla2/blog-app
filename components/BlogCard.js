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
      <h1>Hello world</h1>
      <h2>Hello world</h2>
      <h2>another hello world</h2>
      <h3>another pull  request</h3>
      <h4>git checkout tutorial</h4>
      <h5>git branchs</h5>
      <h6>hello world</h6>
      <p>paragraph</p>
      <p>paragraph 2</p>
    </div>
  )
}
