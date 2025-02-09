// pages/index.js
import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'
import styles from '../styles/layout.module.css'

export async function getStaticProps() {
  // microCMS APIエンドポイント
  const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_ID}.microcms.io/api/v1/posts`
  const res = await fetch(API_ENDPOINT, {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY }
  })
  const data = await res.json()
  return {
    props: {
      posts: data.contents || []
    },
    revalidate: 10  // ISR：10秒ごとに再生成
  }
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className={styles.threeColumnLayout}>
        {/* 左カラム：サイドバー */}
        <aside className={`${styles.column} ${styles.left}`}>
          <h2>サイドバー</h2>
          <p>ここにサブ情報やリンクを掲載します。</p>
        </aside>

        {/* 中央カラム：メインコンテンツ */}
        <main className={`${styles.column} ${styles.center}`}>
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </main>
{/* 右カラム：追加サイドバーとワイドメニュー */}
<aside className={`${styles.column} ${styles.right}`}>
  {/* 右カラム上部：追加サイドバー */}
  <div className={styles.rightTop}>
    <h2>追加サイドバー</h2>
    <p>ここに追加の情報やリンクを掲載します。</p>
  </div>
  
  {/* 右カラム下部：ワイドメニュー */}
  <div className={styles.rightBottom}>
    <h2>ワイドメニュー</h2>
    <ul className="menu-list">
      <li><a href="/category1">カテゴリ1</a></li>
      <li><a href="/category2">カテゴリ2</a></li>
      <li><a href="/category3">カテゴリ3</a></li>
    </ul>
  </div>
</aside>
      </div>
    </Layout>
  )
}
