import { fetchBlogs } from "../lib/api"; // ← `lib/api.js` から関数をインポート！

export async function getStaticProps() {
  const blogs = await fetchBlogs();
  console.log("?? getStaticProps の blogs:", blogs);
  return {
    props: { blogs }, // `blogs` に統一！
  };
}

// React コンポーネント
export default function Home({ blogs }) {
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {blogs.length > 0 ? (
          blogs.map((blog) => <li key={blog.id}>{blog.title}</li>)
        ) : (
          <li>記事がありません</li>
        )}
      </ul>
    </div>
  );
}
