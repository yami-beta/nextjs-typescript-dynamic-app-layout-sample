import React from "react";
import { AppProps } from "next/app";
import Link from "next/link";
import { NextPageWithLayout } from "../components/Layout";

const Noop: React.FC = ({ children }) => <>{children}</>;

const CustomApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  const PageLayout = (Component as NextPageWithLayout).Layout || Noop;

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ flex: "0 0 auto", width: "200px" }}>
        <ul>
          <li>
            <Link href="/">Index</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts/1">Post 1</Link>
          </li>
          <li>
            <Link href="/posts/2">Post 2</Link>
          </li>
          <li>
            <Link href="/posts/3">Post 3</Link>
          </li>
        </ul>
      </nav>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </div>
  );
};

export default CustomApp;
