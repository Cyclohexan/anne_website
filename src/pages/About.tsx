import { Avatar, Grid, Typography } from "@mui/material";
import anne_avatar from '../images/anne_avatar.jpg'
import marie_avatar from '../images/marie_avatar.png'
import mandala from '../images/mandala_black.png'

const About = () => {

    return (

        <div style={{width: "100%"}}>

            <Typography style={{ paddingTop: '5vh', display: 'flex', justifyContent: 'center' }}
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Über Uns
            </Typography>
            <div style={{
                marginLeft: '15vw', marginTop: '5vh', marginBottom: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70vw', textAlign: 'center'
            }}>

                <Grid xl={12} xs={12} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xl={6} xs={12} sx={{ p: 15 }} item style={{ padding: "2em", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', fontSize: '1.5vim', textAlign: 'center' }}>
                        <Avatar alt="Bild Marie" sx={{ width: "15em", height: "15em" }} src={marie_avatar} />
                    </Grid>
                    <Grid item xl={6} xs={12} style={{ display: 'flex', alignItems: 'center'}}>
                        <div style={{ fontSize: '1.5rem' }}>
                        Ich bin Marie und die Musik begleitet mich seit ich denken kann. Mit 6 Jahren lernte ich Klavier zu spielen. Zum Gesang kam ich dann in einer Schülerband. Nach der Schule stieg ich bis zum Studium in eine Deutsch-Rock-Band ein.
                            Neben dem Beruf ist es heute ein toller Ausgleich mit Anne zusammen Menschen an ihvim besonderen Tag mit unserer Musik glücklich zu machen.
                            
                        </div>
                    </Grid>
                    <Grid item order={{ xs: 4, xl: 3 }} xl={6} xs={12} style={{ display: 'flex', alignItems: 'center'}}>
                        <div style={{ fontSize: '1.5rem' }}>
                        Ich bin Anne und spiele Klavier seit dem ich 4 Jahre alt bin. Bis zu meinem 19. Lebensjahr bekam ich Unterricht und habe in meiner Kindheit vereinzelt an Wettbewerben wie beispielsweise Jungend Musiziert teilgenommen. Heute gehe ich dem Klavierspielen im Rahmen unserer Auftritte als Hobby nach. Ich freue mich, Maries Stimme mit meiner Begleitung zu unterstreichen.
                        </div>
                    </Grid>
                    <Grid item order={{ xs: 3, xl: 4 }} xl={6} xs={12} style={{ padding: "4em", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30vw', fontSize: '1.5vim', textAlign: 'center' }}>
                        <Avatar alt="Bild Anne" sx={{ width: "15em", height: "15em" }} src={anne_avatar} />
                    </Grid>
                </Grid>
                <div style={{
                    position: 'absolute',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img className="mandala" style={{ width: '40vh', marginLeft: '-20vh' }} src={mandala} />
                    <img className="mandala" style={{ width: '40vh', position: 'absolute', right: '-20vh' }} src={mandala} />
                </div>
            </div>
        </div>

    );
};

export default About;