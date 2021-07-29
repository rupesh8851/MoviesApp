import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Card.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import "../../node_modules/video-react/dist/video-react.css";
// import "node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react'
import { database } from '../Firebase'
<link rel="stylesheet" href="/css/video-react.css" />

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function TvSeries() {
    let [movie, setMovie] = useState([]);
    const [count, setCount] = useState(1);
    const classes = useStyles();
    const [opens, setOpen] = useState(false);
    const [par, setpar] = useState([]);

    useEffect(() => {
        database.posts.onSnapshot(querySnapshot => {
            let arr = [];
            querySnapshot.forEach((doc, idx) => {
                let da = doc.data().pUrl;
                arr.push(da);
            })

            setpar(arr);


        })

    }, [])

    const handleClickOpenss = () => {
        setOpen(true);
        console.log("open");
    };

    const handleClose = () => {
        console.log("Close");
        setOpen(false);
    };

    const arr = [];
    for (let i = 0; i < 7; i++) {
        arr[i] = count + i;
    }

    const handleCount = (idx) => {

        if (idx >= 0)
            setCount(idx);
    }


    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=96ff490d96665070a2efca4f59402be6&language=hi-US&page=${count}`)
            .then(({ data }) => {
                setMovie(data.results);
            })




    }, [count])



    return (
        <>
            {
                movie.length == 0 ?
                    <div>"loding... "</div> :

                    <div class="card_container" >

                        {movie.map((obj, index) => {

                            let url;
                            url = par[index % 5];
                            console.log("url " + (index % 5) + "  " + url);

                            return (
                                <div>
                                    <div className="containers" onClick={handleClickOpenss} >
                                        <div class="cellphone-container">
                                            <div class="movie">
                                                <div class="menu"><i class="material-icons"></i></div>
                                                <div class="movie-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${obj.poster_path})` }}></div>
                                                <div class="text-movie-cont">
                                                    <div class="mr-grid">
                                                        <div class="col1">
                                                            <h1 class="heading" >{obj.title}</h1>
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
                                                            <p class="movie-description">{obj.overview}</p>
                                                        </div>
                                                    </div>
                                                    <div class="mr-grid actors-row">
                                                        <div class="col1">
                                                            <p class="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
                                                        </div>
                                                    </div>
                                                    {/* <div class="mr-grid action-row">
                                  <div class="col2"><div class="watch-btn"><h3><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
                                  </div>
                                  <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
                                  </div>
                                  <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
                                  </div>
                                  <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
                                  </div>
                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Dialog fullScreen open={opens} onClose={handleClose} TransitionComponent={Transition}>
                                        <AppBar className={classes.appBar}>
                                            <Toolbar>
                                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                                    <CloseIcon />
                                                </IconButton>
                                                <Typography variant="h6" className={classes.title}>
                                                    Sound
                                                </Typography>
                                                <Button autoFocus color="inherit" onClick={handleClose}>
                                                    save
                                                </Button>
                                            </Toolbar>
                                        </AppBar>


                                        <Player 
                                            playsInline
                                            poster="/assets/poster.png"
                                            src={url} />
                                    </Dialog>

                                </div>

                            );
                        })
                        }
                        <div class="page">
                            <ul class="pagi" >
                                <li class="page-item" onClick={() => { handleCount(count - 1) }}> Previous </li>

                                {
                                    arr.map((idx) => {
                                        return <li class="page-item " onClick={() => { handleCount(idx) }}>{idx}</li>
                                    })
                                }
                                <li class="page-item" onClick={() => { handleCount(count + 1) }}>Next</li>
                            </ul>
                        </div>

                    </div>


            }
        </>
    )
}

export default TvSeries