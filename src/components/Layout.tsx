import React, { useEffect } from "react";
import { NextPage } from "next";
import { HlsPlayer } from "./HlsPlayer";

export type NextPageWithLayout = NextPage & {
  Layout?: React.FC;
};

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = (props) => {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: "100%" }}>
        <HlsPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
      </div>
      <div>{props.children}</div>
    </div>
  );
};
