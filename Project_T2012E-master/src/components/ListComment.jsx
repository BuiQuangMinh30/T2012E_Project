import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

import axios from 'axios';
const ListComment = (props) => {
     const {commentProductId} = props;
     const [comments, setComments] = useState([])
     
     useEffect(()=>{
      const fetchData = async () =>{
           const data = await axios.get(`https://elevatorsystemdashboard.azurewebsites.net/api/GetFeedbackByElevatorID/${commentProductId}`);
           if(data.status == 200){
            // console.log('data', data)
            setComments(data.data.datas);
           }else{
                alert('loi')
           }
           
      }
      fetchData();
 },[]);
 console.log('comments', comments)
  return (
    <>
     <div className="col-sm-5 col-md-6 col-12 pb-4">
              <h4>{comments.length -1} Comments</h4>
              {comments.length <= -1 ? 
              <>
                <div>Không có comment nào</div>*
              </>
            :
            <>
              {comments.map((item, index) => {
                console.log('item', item)
                if(index > 0 ){
                  return (
                    <div className="comment mt-4 text-justify float-left">
                    <img
                      src={item.Improvement}
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h4>Minh Bùi</h4>
                    <span> - {item.Problem}</span>
                    <br />
                    <span>{item.SatisfyingLevel}</span>
                    <p>
                      {item.Description}
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