import Link from "next/link";
const Posts = async () => {
    await new Promise((resolve)=>setTimeout(resolve,1000))
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();
  // console.log(data); // You can keep this for debugging if needed

  const linkTitleClasses =
    'text-xl font-semibold text-blue-700 hover:text-blue-900 cursor-pointer block';

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
    
      {/* List of post titles */}
      <ul className="space-y-4">
        {data.posts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Apply classes directly to the Link component */}
            <Link href={`/posts/${post.id}`} className={linkTitleClasses}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts