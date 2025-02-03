import { useEffect, useState } from "react";
import axios from "axios";
import "../../style/test.css";

// 이전 실습에서 로컬의 데이터를 호출한 것을 jsonplaceholder 사이트로 요청 보내서 가져오기 (= fetch 혹은 axios 사용하기)
// fetch와 axios는 프로미스 기반임을 주의할 것 (async/await)

const Practice2 = () => {
  const [posts, setPosts] = useState([]); // 포스트 데이터를 저장할 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  // 마운트 시 데이터 로드
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data.slice(0, 10)); // 상태에 데이터 저장(10개만))
      setIsLoading(false); // 로딩 완료
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

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

export default Practice2;
