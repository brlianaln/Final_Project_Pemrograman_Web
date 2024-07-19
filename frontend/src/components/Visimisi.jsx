import React from "react";
import image from "./img/vsmimg.jpeg"

function Visi (){
    return(
        
        <div className="container " style={{marginTop:"40px"}}> 
            <div className="row">
                <div className="col-lg-12">
                    <div className="visi-misi-title" >
                        <h2 className="title"style={{fontWeight:"bold",textAlign:"center"}}><br/> Vision<br/></h2>
                </div>
                <p class="vision-mission-description d-flex" style={{justifyContent:"center"}}>
              Our vision is to be the premier online destination for book
              lovers, offering a diverse selection across genres
            </p>
            <h2 className="title"style={{fontWeight:"bold",textAlign:"center"}}><br/>Mision<br/></h2>
                <p className="vision-mission-description d-flex"style={{textAlign:"center"}}>
             Our
              mission is to provide a seamless shopping experience, excellent
              customer service, exclusive editions, foster community
              engagement, and stay ahead of industry trends, ensuring we
              remain the go-to choice for book enthusiasts everywhere.
                </p>
                </div>
               
            </div>
        </div>
       
    )
}
export default Visi
