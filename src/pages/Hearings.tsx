import { Grid, Icon, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import vid1 from '../videos/vid1.mp4';
import vid2 from '../videos/vid2.mp4';
import vid3 from '../videos/vid3.mp4';

/*<video controls>
< source src={vid1} type="video/mp4" />
Your browser does not support the video tag.
</video>*/

const Hearings = () => {

    return (

        <div style={{paddingBottom: "4rem"}}>
            <Typography style={{ paddingTop: '5vh', display: 'flex', justifyContent: 'center' }}
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Hörproben
            </Typography>
            <Grid container xl={12} xs={12}>
                <Grid xs={12} xl={4} item style={{ width: "100%", height: "35vh", padding: "30px" }}>
                    <video controls width="100%" height="100%">
                        < source src={vid1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Grid>
                <Grid xs={12} xl={4} item style={{ width: "100%", height: "35vh", padding: "30px"}}>
                    <video controls width="100%"  height="100%" >
                        < source src={vid2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Grid>
                <Grid xs={12} xl={4} item style={{ width: "100%", height: "35vh", padding: "30px"}}>
                    <video controls width="100%" height="100%">
                        < source src={vid3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Grid>
            </Grid>
        </div>


    );
};

export default Hearings;