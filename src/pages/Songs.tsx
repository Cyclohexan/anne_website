import { Typography } from "@mui/material";


const Songs = () => {

    return (

        <div style={{ width: "100%", fontSize: "1.5rem", display: "flex", justifyContent: "center" }}>
            <Typography style={{ width:"100%", paddingTop: '5vh', display: 'flex', justifyContent: 'center' }}
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Songauswahl
            </Typography>
            <div style={{ width: "100%"}}>
                <ul >
                    <li>
                        All of me (John Legend)
                    </li>
                    <li>
                        Bis meine Welt die Augen schließt<br></br>
                        (Alexander Knappe & Joel Brandenschein)
                    </li>
                    <li>
                        Dir gehört mein Herz (Phill Collins)
                    </li>
                    <li>
                        First Times (Ed Sheeran)
                    </li>
                    <li>
                        Mein Apfelbäumchen (Rheinhard Mey)
                    </li>
                    <li>
                        Ohne dich (Münchner Freiheit)
                    </li>
                </ul>
            </div>

        </div>


    );
};

export default Songs;