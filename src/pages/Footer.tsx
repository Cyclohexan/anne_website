import { Icon, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    return (

        <div style={{fontSize: "1.75vh", flexFlow: "row wrap", padding: '15px', width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: "10px" }}>
                <div style={{ width: '3rem' }} >
                    <InstagramIcon fontSize="large" />
                </div>
                <div style={{ width: '3rem' }} >
                    <FacebookIcon fontSize="large" />
                </div>
                <div style={{ width: '3rem' }} >
                    <TwitterIcon fontSize="large" />
                </div>
                <div style={{ width: '3rem' }} >
                    <YouTubeIcon fontSize="large" />
                </div>
            </div>
            <div style={{ width: "100%", paddingBottom: "10px"}}>
                <Link href="Datenschutzerklärung.html" style={{paddingRight: "10px"}} color="inherit">
                    Datenschutzerklärung
                </Link>
                <Link href="Impressum.html" style={{paddingLeft: "10px"}} color="inherit">
                    Impressum
                </Link>
            </div>
            <div style={{ width: "100%" }}>
                2024 - Marie und Anne
            </div>
        </div>


    );
};

export default Footer;