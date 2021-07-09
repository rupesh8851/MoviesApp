import React,{useState,useEffect} from 'react'
import axios from 'axios'
import  './Card.css';
function Movies() {
 
     let[movie,setMovie]=useState([]);

     useEffect(()=>{

        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=96ff490d96665070a2efca4f59402be6&language=en-US&page=1")
        .then(({data})=>{
            setMovie(data.results);
        })
     },[])

    return (        
        <>
          {
               movie.length==0? 
               <div>"loding... "</div>:
                    
                    <div class="card_container">

                       { movie.map((obj)=>{

                           return (
                          
                            <div class="container">
                        <div class="cellphone-container">    
                            <div class="movie">       
                              <div class="menu"><i class="material-icons"></i></div>
                              <div class="movie-img" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${obj.poster_path})`}}></div>
                              <div class="text-movie-cont">
                                <div class="mr-grid">
                                  <div class="col1">
                                    <h1>{obj.title}</h1>
                                    <ul class="movie-gen">
                                      <li>PG-13  /</li>
                                      <li>2h 49min  /</li>
                                      <li>Adventure, Drama, Sci-Fi,</li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="mr-grid summary-row">
                                  <div class="col2">
                                    <h5>Summary</h5>
                                  </div>
                                  <div class="col2">
                                    <ul class="movie-likes">
                                      <li><i class="material-icons">&#xE813;</i>124</li>
                                      <li><i class="material-icons">&#xE813;</i>3</li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="mr-grid">
                                  <div class="col1">
                                    <p class="movie-description">{obj.overview.substring(0,200)}</p>
                                  </div>
                                </div>
                                <div class="mr-grid actors-row">
                                  <div class="col1">
                                    <p class="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
                                  </div>
                                </div>
                                <div class="mr-grid action-row">
                                  <div class="col2"><div class="watch-btn"><h3><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
                                  </div>
                                  <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
                                  </div>
                                  <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
                                  </div>
                                  <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                      
                           ); })
                           }

                        </div> 
                

          }
        </>
    )
}

export default Movies
