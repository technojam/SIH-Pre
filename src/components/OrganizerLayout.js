import React from 'react'
import { Card,Grid,CardActionArea,CardMedia,CardContent,Typography } from '@mui/material'

const OrganizerLayout = () => {
    return (
            <div>
            <Typography Box sx={{textAlign: 'center',bgcolor:'#070c1d',color:"white", fontSize:"48px"}}>ORGANIZERS</Typography>
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} Box sx={{ p: 10, bgcolor:'#070c1d',alignItems: 'center'}}>
                <Grid item xs={3} sm={4} md={4}>
                    <Card>
                        <CardActionArea Box sx={{px:"30px", py:"30px",textAlign: 'center'}}>
                            <CardMedia Box sx={{borderRadius: '20%'}}
                            component="img"
                            image="https://img.icons8.com/ios-filled/150/000000/school.png"
                            alt="Track 1"
                            />
                        <CardContent Box sx={{px:"2px"}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Track 1
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} sm={4} md={4}>
                    <Card>
                        <CardActionArea Box sx={{px:"30px", py:"30px",textAlign: 'center'}}>
                            <CardMedia Box sx={{borderRadius: '20%'}}
                            component="img"
                            image="https://img.icons8.com/ios-filled/150/000000/school.png"
                            alt="Track 1"
                            />
                        <CardContent Box sx={{px:"2px"}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Track 1
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} sm={4} md={4}>
                    <Card>
                        <CardActionArea Box sx={{px:"30px", py:"30px",textAlign: 'center'}}>
                            <CardMedia Box sx={{borderRadius: '20%'}}
                            component="img"
                            image="https://img.icons8.com/ios-filled/150/000000/school.png"
                            alt="Track 1"
                            />
                        <CardContent Box sx={{px:"2px"}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Track 1
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} sm={4} md={4}>
                    <Card>
                        <CardActionArea Box sx={{px:"30px", py:"30px",textAlign: 'center'}}>
                            <CardMedia Box sx={{borderRadius: '20%'}}
                            component="img"
                            image="https://img.icons8.com/ios-filled/150/000000/school.png"
                            alt="Track 1"
                            />
                        <CardContent Box sx={{px:"2px"}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Track 1
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} sm={4} md={4}>
                    <Card>
                        <CardActionArea Box sx={{px:"30px", py:"30px",textAlign: 'center'}}>
                            <CardMedia Box sx={{borderRadius: '20%'}}
                            component="img"
                            image="https://img.icons8.com/ios-filled/150/000000/school.png"
                            alt="Track 1"
                            />
                        <CardContent Box sx={{px:"2px"}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Track 1
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} sm={4} md={4}>
                    <Card>
                        <CardActionArea Box sx={{px:"30px", py:"30px",textAlign: 'center'}}>
                            <CardMedia Box sx={{borderRadius: '20%'}}
                            component="img"
                            image="https://img.icons8.com/ios-filled/150/000000/school.png"
                            alt="Track 1"
                            />
                        <CardContent Box sx={{px:"2px"}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Track 1
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default OrganizerLayout
