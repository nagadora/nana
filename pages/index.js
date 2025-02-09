export async function getStaticProps() {
  const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_ID}.microcms.io/api/v1/posts`
  const res = await fetch(API_ENDPOINT, {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY }
  })
  const data = await res.json()
  return {
    props: {
      posts: data.contents || []
    }
    // ISR を無効化するため、revalidate を削除
  }
}