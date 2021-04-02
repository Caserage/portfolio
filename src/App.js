import './App.css';
import Header from "./Components/Header";
import { Grid, Typography, Container, Card, CardContent, CardActions, Button} from "@material-ui/core";
import { spacing } from "@material-ui/system";

function App() {
  return (
    <>
    <Header/>
    <Container maxWidth="lg" className="content">
      <Grid container spacing={1} justify="center" alignItems="flex-start">
        <Grid item md={12} lg={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Meine Diplomarbeit
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                BAChome
              </Typography>
              <Typography variant="body2" component="p">
                Zum Abschluss meiner Weiterbildung zum dipl. Techniker HF Gebäudetechnik habe ich ein Plugin für Homebridge
                programmiert, welches BACnet-Objekte zu funktionalen HomeKit-Komponenten verbindet und so die Visualisierung
                und Bedienung über das iPhone, iPad und weiter Apple-Geräte ermöglicht.

                <br/><br/>

                Ein nächster Schritt wäre die Implementierung von weiteren Funktionen, wie das Nutzen von "Priority Arrays".
                Dafür müsste aber eine bessere Library für BACnet in Javascript oder Typescript verfügbar sein. Vielleicht 
                könnte ich dies sogar selber entwickeln...
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" color="primary" href="https://github.com/caserage/bachome" target="_blank">Erfahre mehr</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={12} lg={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Mein Tüftelprojekt
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                Tinkerforge Typescript
              </Typography>
              <Typography variant="body2" component="p">
                Für eine Projektarbeit in der Berufsschule habe ich mir einmal das Kit für die Wetterstation von
                Tinkerforge zugelegt. Die ursprüngliche Implementierung der Arbeit fand in C# auf einem nun verschollenen
                alten Rechner statt. Aus interesse wollte ich die Wetterstation neu in Typescript programmieren.

                <br/><br/>

                Da es keine offizielle Implementierung der Tinkerforge Libraries in Typescript gibt sondern,
                nur eine kompilierte Version in Javascript wurde aus diesem Projekt ein Lernprojekt, indem ich
                manuell Typen für die Module erstelle.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" color="primary" href="https://github.com/caserage/tinkerforge-ws" target="_blank">Erfahre mehr</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={12} lg={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Aus reinem Interesse
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                Doppelte Buchführung
              </Typography>
              <Typography variant="body2" component="p">
                Da ich mich im privaten Bereich für Buchhaltung interessiert habe und mir keine öden Bücher mit
                Theorie durchlesen wollte, habe ich auf die Methode "Learning by doing" gesetzt und kurzerhand eine
                eigene einfache Implementation von doppelter Buchhaltung erstellt oder mindest mit der Erstellung begonnen.

                <br/><br/>

                Das Projekt ist reiner Zeitvertreib und dient keinem effektiven Nutzen.<br/>
                Wie das meiste meiner Projekte
                steht aber auch dieses unter eine Opensource-Lizenz auf meine Github-Profil zur Verfügung und kann auch
                gerne erweitert werden.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" color="primary" href="https://github.com/caserage/deb" target="_blank">Erfahre mehr</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <Typography></Typography>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default App;
