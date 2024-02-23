import { Grid, Typography } from "@mui/material";


const Songs = () => {

    return (
        <div style={{ width: "100%" }}>

            <Typography style={{ paddingTop: '5vh', display: 'flex', justifyContent: 'center' }}
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Auswahl an Liedern
            </Typography>
            <div style={{
                marginTop: '5vh',
                marginBottom: '3vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                textAlign: 'center',
                fontSize: "1.5rem"
            }}>
                <Grid container justifyContent="center" xl={12} xs={12} rowSpacing={1} columnSpacing={{ l: 4 }}>
                    <Grid style={{ padding: "10px" }} item xl={3}>
                        <iframe style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/3U4isOIWM3VvDubwSI3y7a?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid style={{ padding: "10px" }} item xl={3}>
                        <iframe style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/1S9X1mWAYrCOtcNbt2sCUy?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid style={{ padding: "10px" }} item xl={3}>
                        <iframe style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/7qAEVU6kY9snF1XS4e37rF?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid style={{ padding: "10px" }} item xl={3}>
                        <iframe style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/6sz0RI02V9Z96I4GcD8PoY?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid style={{ padding: "10px" }} item xl={3}>
                        <iframe style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/5QYnNhTKsN3kE7OaqILA1U?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid style={{ padding: "10px" }} item xl={3}>
                        <iframe style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/4R3n2hzPrECpokAnYD8xQe?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid style={{ padding: "10px" }} item xl={3}>
                        <iframe style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/7JM1dFLOa1kI5MqGnDufiY?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </Grid>
                </Grid>

            </div>
            <Typography style={{ paddingBottom: '5vh', display: 'flex', justifyContent: 'center' }}
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Auf Wunsch auch gerne weitere Lieder.
            </Typography>
        </div>
    );
};

export default Songs;