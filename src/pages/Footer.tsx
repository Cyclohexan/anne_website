import { Icon, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    return (

        <div style={{ padding: '15px', width: '100%', height: '20vh', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{width: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{width:'1vw', padding: '3vh' }} >
                    <InstagramIcon fontSize="large" />
                </div>
                <div style={{width:'1vw', padding: '3vh' }} >
                    <FacebookIcon fontSize="large" />
                </div>
                <div style={{width:'1vw', padding: '3vh' }} >
                    <TwitterIcon fontSize="large" />
                </div>
                <div style={{width:'1vw', padding: '3vh' }} >
                    <YouTubeIcon fontSize="large" />
                </div>
            </div>
        </div>
        

    );
};

export default Footer;