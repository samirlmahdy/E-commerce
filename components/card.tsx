import { Photo } from "../public/photos";
import Hashtags from "./Hashtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { PhotoContext } from "@/context/photo-context";

type cardProps = { key: number; photo: Photo };

const Card = (props: cardProps) => {
  const { likedPhotos, handleLike } = useContext(PhotoContext);
  return (
    <>
      <div className="card">
        <div className="author-container">
          <img className="author-pic" src={props.photo.authorImage} />
          <div className="author-name">{props.photo.author}</div>
        </div>

        <div className="card-container">
          <div className="image-container">
            <img className="post-image" src={props.photo.url} />
            <div className="card-text-container">
              <div className="card-text-title-price">
                <p className="title">{props.photo.title}</p>
                <p className="price">AED 230</p>
              </div>
              <div className="card-text-heart-icon">
                <FontAwesomeIcon
                  className={
                    likedPhotos.includes(props.photo.id)
                      ? "heart-icon liked"
                      : " heart-icon"
                  }
                  onClick={() => handleLike(props.photo.id)}
                  icon={
                    likedPhotos.includes(props.photo.id)
                      ? solidHeart
                      : regularHeart
                  }
                />
              </div>
            </div>
          </div>

          <div className="image-meta">
            <div className="image-likes">
              <FontAwesomeIcon className="heart-icon-32" icon={solidHeart} /> 32
              likes
            </div>
            <div className="image-text">
              <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>

              <div className="hashtag-container">
                {props.photo.hashtags.map((hashtag) => (
                  <Hashtags hashtag={hashtag} />
                ))}
              </div>
            </div>
            <div className="comments">View 12 comments</div>
          </div>
        </div>
      </div>
      <hr className="break" />
    </>
  );
};

export default Card;
