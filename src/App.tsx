import { useState } from 'react';
import { heat_legendsList } from './data.tsx';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < heat_legendsList.length - 1;

  function handleNextClick() {
    setIndex((prevIndex) => (hasNext ? prevIndex + 1 : 0)); 
  }

  function handleBackClick() {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : heat_legendsList.length - 1)); 
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let player = heat_legendsList[index];

  return (
    <div className="container">
      <Card className="card">
        <CardContent>
          <Typography variant="h4">
            SOFTWARE DEVELOPERS
          </Typography>
          <Typography variant="h5">
            Aldyne Ronquillo - C-PEITEL3
          </Typography>
        </CardContent>

        <CardContent className="buttons">
          <Button
            variant="contained"
            onClick={handleBackClick}
            className="nav-button prev-button"
          >
            BACK
          </Button>
          <Button
            variant="contained"
            onClick={handleNextClick}
            className="nav-button next-button"
          >
            NEXT
          </Button>
        </CardContent>

        <CardMedia component="img" alt={player.alt} height="250" image={player.url} />

        <CardContent className="details-section">
          <Typography variant="h4" className="player-name">
            {player.player_name}
          </Typography>
          <Typography variant="h6" className="index-text">
            {index + 1} of {heat_legendsList.length}
          </Typography>
        </CardContent>

        <CardActions className="details-toggle">
          <Button size="small" onClick={handleMoreClick} className="toggle-button">
            {showMore ? '▲' : '▼'}
          </Button>
        </CardActions>

        {showMore && (
          <CardContent className="description-section">
            <Typography variant="body1" className="description-text">
              {player.description}
            </Typography>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
