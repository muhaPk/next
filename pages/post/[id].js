import { useRouter } from 'next/router'
import Container from '../../components/Container'

export default function PostId({post}) {

    // const {query: {id}} = useRouter()

    return (
        <Container>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </Container>
    )
}

export async function getServerSideProps({params}) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await response.json()

    return {
        props: {post},
    }
}
