// pages/blogs/[id].js
export async function getStaticPaths() {
  // すべてのブログ記事のIDを取得
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_ID}.microcms.io/api/v1/blogs`, {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY },
  });
  const data = await res.json();

  // すべてのブログIDを取得して、pathsに渡す
  const paths = data.contents.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false }; // falseにすることで存在しないIDに対して404を返す
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_ID}.microcms.io/api/v1/blogs/${id}`;
  const res = await fetch(API_ENDPOINT, {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY },
  });

  if (!res.ok) {
    return { notFound: true }; // エラーが発生した場合は404を返す
  }

  const post = await res.json();
  return {
    props: { post },
  };
}

export default function BlogPost({ post }) {
  if (!post) {
    return <h1>記事が見つかりません</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}