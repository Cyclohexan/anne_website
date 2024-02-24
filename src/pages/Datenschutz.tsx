import Navigation from "./Navigation";

const Datenschutz = () => {
    return (
        <div>
            <Navigation onlyHome={true} />
            <div style={{ marginTop: "10vh", paddingLeft: "2rem", paddingRight: "2rem" }}>
                <h5>Datenschutzerklärung für [Name des Unternehmens]</h5><br />

                Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten (nachfolgend "Daten") im Rahmen unserer Website und unseres Geschäftsbetriebs.
                <br /><br />
                <h5>Verantwortliche Stelle:</h5>

                [Name des Unternehmens]<br />
                [Adresse des Unternehmens]<br />
                [Kontaktinformationen des Unternehmens]<br />

                <br />

                <h5> Arten der verarbeiteten Daten:</h5>

                <br />

                Personenbezogene Daten (z. B. Name, Adresse, E-Mail-Adresse, Telefonnummer)<br />
                Nutzungsdaten (z. B. besuchte Seiten, Klickverhalten, IP-Adresse)<br />
                Kommunikationsdaten (z. B. E-Mail-Inhalte, Nachrichtenverlauf)<br />

                <br />
                <h5>Zwecke der Datenverarbeitung:</h5><br />

                Wir verarbeiten Ihre Daten für folgende Zwecke:

                <br /><br />

                Zur Durchführung und Abwicklung von Buchungen und Verträgen<br />
                Zur Beantwortung von Anfragen und zur Kommunikation mit Kunden<br />
                Zur Verbesserung unseres Service und unserer Website<br />
                Zur Erfüllung rechtlicher Verpflichtungen<br /><br />


                <h5>Rechtsgrundlagen der Verarbeitung:</h5>

                <br />
                Wir verarbeiten Ihre Daten auf Grundlage der folgenden Rechtsgrundlagen:

                <br /><br />

                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO
                Vertragserfüllung gemäß Art. 6 Abs. 1 lit. b DSGVO
                Erfüllung rechtlicher Verpflichtungen gemäß Art. 6 Abs. 1 lit. c DSGVO
                Berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO
                Weitergabe von Daten:

                Wir geben Ihre Daten nur weiter, wenn dies zur Erfüllung unserer vertraglichen Pflichten erforderlich ist, auf Grundlage Ihrer Einwilligung oder wenn eine rechtliche Verpflichtung besteht.

                Speicherdauer:

                Wir speichern Ihre Daten nur solange, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist, oder solange gesetzliche Aufbewahrungsfristen bestehen.

                Ihre Rechte:

                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit Ihrer Daten. Sie haben auch das Recht, der Verarbeitung Ihrer Daten zu widersprechen. Bitte kontaktieren Sie uns dazu unter den unten angegebenen Kontaktdaten.

                Kontakt:

                <br /><br />

                Bei Fragen zur Verarbeitung Ihrer Daten oder zur Ausübung Ihrer Rechte können Sie sich an uns wenden:

                <br /><br />

                [Name des Unternehmens]<br />
                [Adresse des Unternehmens]<br />
                [Kontaktinformationen des Unternehmens]<br />
            </div>
        </div>

    );
};

export default Datenschutz;