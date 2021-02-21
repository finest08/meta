import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './RowCard.css';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 700,
    
  },
  media: {
    objectFit: 'Contain',
    height: 300,
    width: 500,
  },
});

export default function RowCard( { title, fetchUrl} ) {
    const classes = useStyles();
    const [headlines, setHeadlines] = useState({ articles: [] });
    
  useEffect(() => {
    const fetchHeadlines = async () => {
      const resp = await fetch(fetchUrl);
      if (resp.ok) {
        const json = await resp.json();
        setHeadlines(json);
      }
    };
    fetchHeadlines();
  }, [fetchUrl]);

    return(
        <>
            {headlines.articles.map((article, index) => 
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={article.urlToImage}
                            title={article.title}
                        />
                        <CardContent className="content">
                            <Typography gutterBottom variant="p" component="p">
                                <Typography gutterBottom variant="p" component="p">
                                </Typography>
                                <Typography display="block" variant="h4" align="left">
                                    {article.title}                                    
                                </Typography>
                                <Typography gutterBottom variant="h6" component="p" align="left">
                                     {article.publishedAt.slice(0, 10)}
                                    <Typography>
                                        {article.source.name}
                                    </Typography>
                                </Typography>
                                <Typography gutterBottom variant="p" component="p" align="left">
                                </Typography>
                                <Typography component="p" variant="body1" align="left">
                                    {article.content}
                                </Typography>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            )}    
        </>
    )
}
