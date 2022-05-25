import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard/PostCard'
import UserCard from '../components/UserCard/UserCard'
import { getPosts, selectPosts } from '../features/posts/postsSlice'
import { getUsers, selectUsers } from '../features/users/usersSlice'
import getStore from '../store/store'

export default function Home() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const posts = useSelector(selectPosts);

  return (
    <div className="container">
      <Head>
        <title>Next with Redux</title>
        <meta name="description" content="Next with Redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/posts"><a className='Link'>Посты</a></Link>

      <div className='AddButton' onClick={() => dispatch(getPosts())}>Добавить на страницу посты</div>

      <main className="cardsContainer">
        {users.map(({ id, name, email }) => (
          <UserCard key={id} name={name} email={email}/>
        ))}

        {posts.length ? posts.map(({ id, title, body }) => (
          <PostCard key={id} title={title} body={body}/>
        )) : null}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const store = getStore();
  await store.dispatch(getUsers());

  return {
    props: {
      initialState: store.getState()
    }
  }
}
