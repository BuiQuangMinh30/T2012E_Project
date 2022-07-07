import { useSelector } from "react-redux";
// import './Post.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewProduct from "./ReviewProduct";
import { useEffect } from "react";
import ListComment from "./ListComment";

import { withRouter } from "react-router";

const ListReview = (props) => {
  // const post = useSelector((state) => state.commentProducts.values);
  console.log('match',props)
  return (
    <>
      <section>
        <div className="container review-comment">
          <div className="row">
            {/* <ListComment post={post}/> */}
            <ListComment/>
            <ReviewProduct/>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(ListReview);
