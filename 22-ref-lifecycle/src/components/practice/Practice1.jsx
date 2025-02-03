import { useEffect, useState } from "react";
import "../../style/test.css";

const fakePosts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
  },
];

/*
useEffect를 활용해 가짜 데이터를 Mount 시점에 호출하기

fakePosts 변수에 가짜 데이터를 변수로 저장하기
PostList 컴포넌트 Mount 시 setTimeout을 이용해 2초 후, fakePosts 를 state 로 저장하기
posts state 길이가 0이라면 loading 메세지 보이기, 길이가 0보다 크다면 post 리스트 보여주기
useEffect, 삼항연산자 사용하기
*/

const Practice1 = () => {
  const [posts, setPosts] = useState([]); // 포스트 데이터를 저장할 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  const fetchPosts = () => {
    setTimeout(() => {
      setPosts(fakePosts); // 2초 후 fakePosts 데이터를 상태에 저장
      setIsLoading(false); // 로딩 완료
    }, 2000); // 2초 지연
  };

  // 마운트 시 데이터 로드
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      {isLoading ? ( // 로딩 상태 처리
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="totalbody">
            <p>No {post.id}</p>
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Practice1;
