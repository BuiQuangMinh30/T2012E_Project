import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { createComment } from "../redux/comment-product/commentProductSlice";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function ReviewProduct() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState("");
  const stars = Array(5).fill(0);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   submitData()
  // })
  const submitData = () => {
    const newPost = {
      rate: currentValue,
      comment: comment,
    };
    dispatch(createComment(newPost));
    setComment("");
    setHoverValue(undefined);
    setCurrentValue(0);
  };

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <>
      <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label for="message" style={{marginBottom: '10px'}}>Rate Star</label>
            <br/>
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
            <button
              style={styles.button}
              width={"50px"}
              onClick={() => submitData()}
            >
              SUBMIT
            </button>
          </div>
       
      </div>
    </>
  );
}

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
    minWidth: '100%',
  },
  button: {
    marginTop: "10px",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 10,
    backgroundColor: '#4267B2',
    color: '#fff',
    marginBottom: "10px",
  },
};

export default ReviewProduct;
