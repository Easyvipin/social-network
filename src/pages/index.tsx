import Form from "@src/Components/Form";
import PostFeed from "@src/Components/Posts/PostFeed";
import Header from "@src/Components/layout/Header";

export default function Home() {
  return (
    <>
      <Header label="Home" showBackArrow={true} />
      <Form placeholder="Whats happening?" />
      <PostFeed />
    </>
  );
}
