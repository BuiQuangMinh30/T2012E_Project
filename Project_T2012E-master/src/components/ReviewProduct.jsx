import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { createComment } from "../redux/comment-product/commentProductSlice";

import { set } from "../redux/product-modal/productModalSlice";

import axios from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ReviewProduct = (props) => {
  // console.log('review product', props.dataReview.match.params.slug)
  const ElevatorId = props.dataReview.match.params.slug;
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [commentFeedback, setComment] = useState("");
  const [profile, setProfile] = useState({});
  var getToken = JSON.parse(localStorage.getItem("dataUser"));

  const dateNow = new Date();

  const stars = Array(5).fill(0);
  const dispatch = useDispatch();
  const urlFeedback =
    "https://elevatorsystemdashboard.azurewebsites.net/api/Feedbacks";

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  // console.log('comment', commentFeedback)
  const infoComment = {
    Description: commentFeedback,
    SatisfyingLevel: currentValue,
    ElevatorID: ElevatorId,
    Problem: dateNow,
    Improvement: "https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg"
  };
  
  const submitData = async (e) => {
    
  const getToken1 = getToken.access_token;
    e.preventDefault();
    axios
      .post(urlFeedback, infoComment, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken1}`,
        },
      })
      .then((result) => {
        // console.log('result', result);
        if (result.status == 200) {
          setComment("");
          setHoverValue(undefined);
          setCurrentValue(0);
          alert("Comment thành công");
        }
        else alert("Invalid User");
      });
    
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-4col-12 mt-4">
        {/* <form> */}
        {getToken && getToken ? 
         <>
         <div className="form-group">
           <h4>Leave a comment</h4>
           <label for="message">Message</label>
           <textarea
             style={styles.textarea}
             name="msg"
             id=""
             msg
             cols="30"
             rows="5"
             // className="form-control"
             value={commentFeedback}
             onChange={(e) => setComment(e.target.value)}
           ></textarea>
         </div>

         <div className="form-group">
           <label for="message" style={{ marginBottom: "10px" }}>
             Rate Star
           </label>
           <br />
           {/* <br></br> */}
           {stars.map((_, index) => {
             return (
               <FaStar
                 key={index}
                 value={currentValue}
                 size={24}
                 onClick={() => handleClick(index + 1)}
                 onMouseOver={() => handleMouseOver(index + 1)}
                 onMouseLeave={handleMouseLeave}
                 color={
                   (hoverValue || currentValue) > index
                     ? colors.orange
                     : colors.grey
                 }
                 style={{
                   marginRight: 10,
                   cursor: "pointer",
                 }}
               />
             );
           })}
         </div>

         <div className="form-group">
           <button style={styles.button} width={"50px"} onClick={submitData}>
             SUBMIT
           </button>
         </div>
         </>
         :
         <>
          <h5>Bạn phải login mới feedback được</h5>
          {/* <button></button> */}
         </>
      }
         
        {/* </form> */}
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0 0 0",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #cbbfbf",
    borderRadius: 5,
    padding: 5,
    margin: "10px 0",
    minHeight: 100,
    minWidth: "100%",
  },
  button: {
    marginTop: "10px",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 10,
    backgroundColor: "#4267B2",
    color: "#fff",
    marginBottom: "10px",
  },
};

export default ReviewProduct;
