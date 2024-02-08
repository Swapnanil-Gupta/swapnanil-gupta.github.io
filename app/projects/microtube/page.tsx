import { ExternalLink } from "lucide-react";

function Microtube() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-highlight">Microtube</h2>
      <p>
        MicroTube is a real Youtube clone. However, I did not just recreate only
        the UI of Youtube but also some of it&apos;s core features video upload,
        360p/480p/720p processing, thumbnail generation, likes/dislikes and
        comments. etc. from scratch. It is a distributed and extensible system
        that offers a small subset of Youtube&apos;functionality.
      </p>
      <div className="flex gap-2 text-accent">
        <a
          className="flex gap-1 items-center"
          href="https://github.com/Swapnanil-Gupta/microtube"
          target="_blank"
        >
          Source Code <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div>
        <p className="text-highlight">Browsing, searching and video playback</p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://ddy7tjx3j294c.cloudfront.net/videos/microtube_home_search_playback.mp4"
            controls
          />
        </div>
      </div>
      <div>
        <p className="text-highlight">Likes, dislikes and comments</p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://ddy7tjx3j294c.cloudfront.net/videos/microtube_like_dislike_comment.mp4"
            controls
          />
        </div>
      </div>
      <div>
        <p className="text-highlight">Uploading videos</p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://ddy7tjx3j294c.cloudfront.net/videos/microtube_upload.mp4"
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default Microtube;
