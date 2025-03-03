interface LikeDislikeProps {
  id: number;
  likes: number;
  handleLikes: (id: number) => void;
  handleDislike: (id: number) => void;
}

function LikeDislike({ id, handleLikes, handleDislike }: LikeDislikeProps) {
  return (
    <div className="like-dislike">
      <button onClick={() => handleLikes(id)}>👍</button>
      <button onClick={() => handleDislike(id)}>👎</button>
    </div>
  );
}

export default LikeDislike;
