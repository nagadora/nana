export async function getStaticProps() {
  console.log("getStaticProps が実行された！"); // ← デバッグ用

  const res = await fetch("https://nene.microcms.io/api/v1/blogs", {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY },
  });

  const data = await res.json();
  console.log("getStaticProps APIレスポンス:", data); // ← ここでAPIレスポンスを表示！

  return {
    props: {
      blogs: data.contents || [],
    },
  };
}
// pages/blogs/index.js の例
import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h1>ブログ一覧</h1>
      {/* コンテンツをここに表示 */}
    </div>
  );
};

export default Blogs;
