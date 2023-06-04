import Container from '../../components/Container'
import Link from "next/link"

export default function Post({posts}) {

  return (
    <Container>
        Posts
        <ul>
            {
                posts.map((post, i) => <li key={i}>
                    <Link href={`/post/${post.id}`}>
                        <span>{post.title}</span>
                    </Link>
                </li>)
            }
        </ul>
    </Container>
  )
}

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return {
        props: {posts},
    }
}
