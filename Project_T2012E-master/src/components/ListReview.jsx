import { useSelector } from "react-redux";
// import './Post.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewProduct from "./ReviewProduct";
import { useEffect } from "react";
import ListComment from "./ListComment";

const ListReview = () => {
  const post = useSelector((state) => state.commentProducts.values);
  useEffect(()=>{
    
  },post)
  return (
    <>
      <section>
        <div className="container review-comment">
          <div className="row">
            <ListComment post={post}/>
            <ReviewProduct/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListReview;
