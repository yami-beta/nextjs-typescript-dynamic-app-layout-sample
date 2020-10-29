import React from "react";
import { useRouter } from "next/router";
import { Layout, NextPageWithLayout } from "../../components/Layout";

const PostPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <div>
      <h1>Post {postId}</h1>
    </div>
  );
};

PostPage.Layout = Layout;

export default PostPage;
