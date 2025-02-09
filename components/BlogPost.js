import Link from 'next/link'
import styles from '../styles/blogPost.module.css'

export default function BlogPost({ post }) {
  return (
    <article className={styles.blogPost}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className={styles.pubDate}>
        {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
          year: 'numeric', month: 'long', day: 'numeric'
        })}
      </div>
      <Link href={`/post/${post.id}`}>
        <span className={styles.buttonCute}>続きを読む</span>
      </Link>
    </article>
  )
}
