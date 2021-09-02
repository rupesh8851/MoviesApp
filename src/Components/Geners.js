import React from 'react'
import ContainedButtons from './Select_genres'
import LatestMovies from './LatestMovies'


function Geners() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-9'>  
                            {
                                <ContainedButtons></ContainedButtons>
                            }
                    </div>
                    <div className='col-3'>
                            {
                                <LatestMovies></LatestMovies>
                            }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Geners