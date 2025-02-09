export const fetchBlogs = async () => {
  try {
    console.log("?? fetchBlogs が実行された！");

    const API_ENDPOINT = `https://nene.microcms.io/api/v1/blogs`; // ← エンドポイントが正しいか確認！
    console.log("?? APIエンドポイント:", API_ENDPOINT);

    const res = await fetch(API_ENDPOINT, {
      headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY },
    });

    if (!res.ok) {
      throw new Error(`? APIエラー: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("?? APIレスポンス:", data);

    return data.contents || [];
  } catch (error) {
    console.error("? fetchBlogs エラー:", error);
    return [];
  }
};