import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';
import { forwardRef } from 'react';

const VideoCard = forwardRef(({ movie }, ref) => {

    const base_url = "https://image.tmdb.org/t/p/original/"

    return (
        <div className='videoCard' ref={ref}>
            <img
                src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                alt="movie poster" />
            <TextTruncate
                line={2}
                element='p'
                truncateText='...'
                text={movie.overview}
            />
            <h3>{movie.title || movie.original_name}</h3>
            <p className='videoCard_stats'>
                {movie.media_type && `${movie.media_type}`}
                {movie.release_date || movie.first_air_date}
                <ThumbUpSharp />
                {movie.vote_count}
            </p>
        </div>
    )
});

export default VideoCard
