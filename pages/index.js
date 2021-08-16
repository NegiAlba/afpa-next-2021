import Head from 'next/head'
import PostList from "../components/PostList";

export default function Home({posts}) {
  return (
    <div>
      <Head><title>AFPA - Learning Next</title></Head>
      <h1>Learning Next</h1>
      <PostList posts={posts} />
    </div>

  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2`)

  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}