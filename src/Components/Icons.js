import React from 'react'
import './Icon.css'


const Icons = () => {
    return (
        <>
            <h4>This is the UI of Twitter </h4>
            <div className="icon_section">
                <i className="fab fa-twitter" style={{color:'rgba(29,161,242,1.00)', fontSize:'30px'}}></i><br/><br/>
                <i className="fas fa-home"> Home</i><br/><br/>
                <i className="fas fa-hashtag"> Explore</i><br/><br/>
                <i className="far fa-bell"><b> Notifications </b></i><br/><br/>
                <i className="far fa-envelope"><b> Messages</b></i><br/><br/>
                <i className="far fa-bookmark"><b> Bookmarks</b></i><br/><br/>
                <i className="far fa-list-alt"><b> Lists</b></i><br/><br/>
                <i className="far fa-user"> <strong>Profile</strong></i><br/><br/>
                <i className="far fa-comment-dots"><b> More </b></i><br/><br/>
                <button className="btn btn-primary submit">Tweet</button><br/><br/>
                <img style={{height:"7vh", width:"3vw", borderRadius:"50%", marginLeft:"3vw", marginTop:"1vh"}} src="https://scontent-del1-2.xx.fbcdn.net/v/t1.6435-0/c0.4.567.567a/s526x395/134726944_222323876144931_6483419569026100981_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=whlk6ulyAuAAX-s3wZJ&tn=s7ovqz6sdDeaUraE&_nc_ht=scontent-del1-2.xx&tp=28&oh=ac257ef0a1d85923f5a1a4129bbc93c2&oe=60D059FC" alt=""  />
                <b className="ap">Amarpal</b><br/>
                <emphasize>@Amarpal2001</emphasize>
            </div>
            <div className="content">
                <div className="home">
                    <h2>Amarpal </h2>                        
                </div>
               
                <div className="background">
                    <div>
                        <img className="avatar" src="https://scontent-del1-2.xx.fbcdn.net/v/t1.6435-0/c0.4.567.567a/s526x395/134726944_222323876144931_6483419569026100981_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=whlk6ulyAuAAX-s3wZJ&tn=s7ovqz6sdDeaUraE&_nc_ht=scontent-del1-2.xx&tp=28&oh=ac257ef0a1d85923f5a1a4129bbc93c2&oe=60D059FC" alt="Profile_image"/>
                    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className="bio_data">
                        Amarpal<br/>
                        <span className="bio">@Amarpal2001</span><br/>
                        <i className="far fa-calendar-alt cal"> Joined June 2021</i><br/>
                        <span className="status"> 0 Following 0 Follower </span>
                    </div>
                    <hr/>
                    <div className="items">
                        <ul className="amar">
                        <li>Tweets</li>
                        <li>Tweets & Replies</li>
                        <li>Media</li>
                        <li>Likes</li>
                        </ul>
                    </div>
                        <div className="container">
                            <h4>Who to follow</h4>
                        </div><br/>
                            <div>
                                <img style={{borderRadius:'50%', height:"9vh", width:'4vw'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuta8BUTtPU-EGJsijb81h7VDCpklUBukrxw&usqp=CAU" alt="follow"/>
                                <b id="tiger">Tiger Shroff </b><br/>
                                <div className="tiger_btn">
                                    <button>Follow</button>
                                </div>
                                    <button className="follow">Edit Profile</button>
                            </div>                   

                    <div className="search">
                        <input placeholder=" 🔎 Search Twitter" type="text" className='input'/>
                        <div className="search_avatar">
                            <div>
                                <h5>You might like </h5>
                                <hr/>
                            </div>
                            <img className="all_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUskYYzpxELSGgcMA3ZykA5OzPXgFgOKQ2TA&usqp=CAU" alt="a"/>
                            <span className="narender">Narendra Modi</span>
                            <p>@narendramodi</p>
                            <div className="button_follow">
                                <button>Follow</button>
                            </div>
                            <div>
                            <img className="akshay" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRLhVkZohIok5EDYn5XFBD-IQU7rQehwvGA&usqp=CAU" alt="ak"/>
                            </div>                            
                                <div className="akshay_text">Akshay Kumar</div>
                                <div className="akshay1">@akshaykumar</div>
                                <div className="btn2">
                                    <button>Follow</button>
                                    </div>  
                            <div>
                            <img className="amitabh2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GSVNmOer1cvmkKVGwqoU5DBiG67xsBu9EA&usqp=CAU" alt="amitabh"/>
                            </div>
                            <div className='amitabh_text'>Amitabh bachchan</div>
                            <div className='amitabh1'>@amitabhbhachan</div>
                                <div className="btn3">
                                    <button>Follow</button>
                                </div><br/>
                                <h6 style={{color:'rgba(29, 161, 242, 1.00)'}}>Show more</h6><br/>
                                <div className="data">
                                    <h4 >What's Happening</h4><hr/>
                                    <span className="live_data">
                                        India national news
                                    </span><br/>
                                    <div className="news">
                                        Court grants bail to three<br/> students activists arrested in<br/> delhi riot case 
                                    </div>
                                        <span>
                                            <img className="new1" src="https://pbs.twimg.com/semantic_core_img/1404727529244561409/qPvOt5ok?format=png&name=360x360" alt="first"/>
                                        </span>
                                </div>
                        </div>                
                    </div>
                </div>
            </div>
        </>
    )
}
export default Icons;
