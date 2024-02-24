import Navigation from "./Navigation";

const Impressum = () => {
    return (
        <div>
            <Navigation onlyHome={true}/>
            <div style={{ marginTop: "10vh", paddingLeft: "2rem", paddingRight: "2rem" }}>
                <h5>Impressum für [Name des Unternehmens]:</h5>
                <br />
                [Name des Unternehmens]<br />
                [Rechtsform des Unternehmens, z.B. Einzelunternehmen]<br />
                [Inhaber / Geschäftsführer]<br />
                [Adresse des Unternehmens]<br />
                [Kontaktinformationen des Unternehmens, z.B. Telefonnummer, E-Mail-Adresse]<br />
                <br />
                <h5>Umsatzsteuer-Identifikationsnummer:</h5>
                [Hier können Sie Ihre Umsatzsteuer-Identifikationsnummer angeben, falls zutreffend.]<br />
                <br />
                <h5>Aufsichtsbehörde:</h5>
                [Zuständige Aufsichtsbehörde, z.B. Handelskammer oder Gewerbeaufsichtsamt]<br />
                <br />
                <h5>Berufsbezeichnung und berufsrechtliche Regelungen:</h5>
                [Gegebenenfalls können Sie hier Ihre Berufsbezeichnung und die berufsrechtlichen Regelungen angeben, die für Ihre Tätigkeit gelten.]<br />
                <br />
                <h5>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h5>
                [Hier können Sie angeben, wer für den Inhalt der Website nach dem Rundfunkstaatsvertrag verantwortlich ist.]<br />
                <br />
                <h5>Haftungsausschluss:</h5>
                [Hier können Sie einen Haftungsausschluss angeben, der darauf hinweist, dass Sie keine Haftung für die Inhalte externer Links übernehmen.]<br />
                <br />
                <h5>Bildnachweise:</h5>
                [Hier können Sie angeben, woher die auf Ihrer Website verwendeten Bilder stammen und ob Sie die erforderlichen Lizenzen besitzen.]<br />
            </div>
        </div>

    );
};

export default Impressum;