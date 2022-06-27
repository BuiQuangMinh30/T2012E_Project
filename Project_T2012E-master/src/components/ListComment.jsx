import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
const ListComment = (props) => {
     // const {post} = props;
     
  const post = useSelector((state) => state.commentProducts.values);
  return (
    <>
     <div className="col-sm-5 col-md-6 col-12 pb-4">
              <h4>{post.length - 1} Comments</h4>
              {post.length <=1 ? 
              <>
              <div>Không có comment nào</div>
              </>
            :
            <>
              {post.map((item, index) => {
                if(index > 0 ){
                  return (
                    <div className="comment mt-4 text-justify float-left">
                    <img
                      src="https://i.imgur.com/yTFUilP.jpg"
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h4>Minh Bùi</h4>
                    <span> - 20 October, 2018</span>
                    <br />
                    <span>{item.rate}</span>
                    <p>
                      {item.comment}
                    </p>
                  </div>
                  )
                }
                
              })}
            </>
            }
            </div>
    </>
  )
}

export default ListComment