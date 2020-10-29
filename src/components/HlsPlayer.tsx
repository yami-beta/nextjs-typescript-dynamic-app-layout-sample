import React, { useRef, useEffect } from "react";
import Hls from "hls.js";

type HlsPlayerProps = {
  src: string;
};

export const HlsPlayer: React.FC<HlsPlayerProps> = (props) => {
  const hlsRef = useRef<Hls>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    hlsRef.current = new Hls();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const hls = hlsRef.current;
    if (!hls) {
      return;
    }

    if (Hls.isSupported()) {
      hls.loadSource(props.src);
      hls.attachMedia(video);

      return () => {
        hls.detachMedia();
        hls.stopLoad();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = props.src;
    }
  }, [props.src]);

  return <video ref={videoRef} controls={true} style={{ width: "100%" }} />;
};
