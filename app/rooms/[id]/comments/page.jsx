const fetchCommentsPost = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    throw new Error('Error al cargar los comentarios')
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Post({ params }) {

    const {id} = params
    const comments = await fetchCommentsPost(id)

    return (
        <ul style={{fontSize: '12px', background: '#444'}}>
            {comments.map(c => (
                <li key={c.id}>
                    <h4>{c.name}</h4>
                    <small>{c.body}</small>
                </li>
            ))}
        </ul>
    )
}