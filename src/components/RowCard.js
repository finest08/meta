import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    maxHeight: 900,
    
  },
  media: {
    objectFit: 'Contain',
    height: 300,
    width: 620,
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
        <Container>
          <Grid container spacing={3}>
            {headlines.articles.map((article, index) =>
              <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={article.urlToImage}
                    title={article.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {article.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
            )}
          </Grid>
        </Container>        
   </>
    )
}




















// import React, { useState, useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 500,
//     maxHeight: 1200,
    
//   },
//   media: {
//     objectFit: 'Contain',
//     height: 300,
//     width: 500,
//   },
// });

// export default function RowCard( { title, fetchUrl} ) {
//     const classes = useStyles();
//     const [headlines, setHeadlines] = useState({ articles: [] });
    
//   useEffect(() => {
//     const fetchHeadlines = async () => {
//       const resp = await fetch(fetchUrl);
//       if (resp.ok) {
//         const json = await resp.json();
//         setHeadlines(json);
//       }
//     };
//     fetchHeadlines();
//   }, [fetchUrl]);

//     return(
//         <>
//             {headlines.articles.map((article, index) => 
//                 <Card className={classes.root}>
//                     <CardActionArea>
//                         <CardMedia
//                             className={classes.media}
//                             image={article.urlToImage}
//                             title={article.title}
//                         />
//                         <CardContent className="content">
//                             <Typography gutterBottom variant="p" component="p">
//                                 <Typography gutterBottom variant="p" component="p">
//                                 </Typography>
//                                 <Typography display="block" variant="h4" align="left">
//                                     {article.title}                                    
//                                 </Typography>
//                                 <Typography gutterBottom variant="h6" component="p" align="left">
//                                      {article.publishedAt.slice(0, 10)}
//                                     <Typography>
//                                         {article.source.name}
//                                     </Typography>
//                                 </Typography>
//                                 <Typography gutterBottom variant="p" component="p" align="left">
//                                 </Typography>
//                                 <Typography component="p" variant="body1" align="left">
//                                     {article.description}
//                                 </Typography>
//                             </Typography>
//                         </CardContent>
//                     </CardActionArea>
//             </Card>
//             )}    
//         </>
//     )
// }

