import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard/PostCard'
import UserCard from '../components/UserCard/UserCard'
import { getPosts, selectPosts } from '../features/posts/postsSlice'
import { getUsers, selectUsers } from '../features/users/usersSlice'
import getStore from '../store/store'

export default function Posts() {
  const dispatch = useDispatch();

  let posts = useSelector(selectPosts);
  let users = useSelector(selectUsers);

  return (
    <div className="container">
      <Head>
        <title>Next with Redux Posts Page</title>
        <meta name="description" content="Next with Redux Posts Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/"><a className='Link'>Пользователи</a></Link>

      <div className='AddButton' onClick={() => dispatch(getUsers())}>Добавить на страницу пользователей</div>

      <main className="cardsContainer">
        {posts.map(({ id, title, body }) => (
          <PostCard key={id} title={title} body={body}/>
        ))}

        {users.length ? users.map(({ id, name, email }) => (
          <UserCard key={id} name={name} email={email}/>
        )) : null}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const store = getStore();
  await store.dispatch(getPosts());

  return {
    props: {
      initialState: store.getState()
    }
  }
}
