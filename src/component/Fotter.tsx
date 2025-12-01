import { Box, Container, Typography } from "@mui/material";
import "../App.css";
import { grey } from "@mui/material/colors";
import study from "../assets/study3.png";
import logotip from "../assets/study6.png";
import logotip2 from "../assets/study7.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function FooterPage() {
    const primry = grey[100];
    return (
        <Box sx={{ pt: 5, height: 210, backgroundColor: primry, display: "flex", flexDirection: "row" }}>
            <Container style={{ display: "flex", flexDirection: "row" }} maxWidth="xl" >
                <Container sx={{
                    width: 500, height: 200, pt: 3, margin: "auto",
                    display: "flex", flexDirection: "column", gap: 3, marginRight: 137.4
                }}>
                    <Container sx={{ minWidth: 1400, display: "flex", flexDirection: "row",
                         justifyContent: "space-between", gap: 3 }} className="footer reveal">
                        <img src={study} alt="" width={130} height={100} />
                        <img src={logotip} alt="" width={140} height={60} style={{ paddingTop: 14 }} />
                        <img src={logotip2} alt="" width={90} height={70} style={{
                            borderRadius: "50%",
                            marginTop: 13
                        }} />
                        <Container style={{
                            minWidth: 70, height: 110, marginLeft: 10, display: "flex",
                            flexDirection: "column", flexWrap: "wrap", gap: 6.5
                        }}>
                            <a href="https://oliygoh.uz" className="footer-a">Xalqaro grantlar</a>
                            <a href="https://oliygoh.uz" className="footer-a">Magistratura</a>
                            <a href="https://oliygoh.uz" className="footer-a">Talaba</a>
                            <a href="https://oliygoh.uz" className="footer-a">Oliy talim</a>
                            <a href="https://oliygoh.uz" className="footer-a">Milliy sertifikat</a>
                            <a href="https://oliygoh.uz" className="footer-a">OTM</a>
                            <a href="https://oliygoh.uz" className="footer-a">Imtiyoz</a>
                            <a href="https://oliygoh.uz" className="footer-a">Maktab</a>
                        </Container>
                        <Container sx={{ width: 400, mt: -1, display: "flex", flexDirection: "column"}}>
                            <Typography fontSize={18}>Ijtimoy tarmoqlarda</Typography>
                            <Container sx={{ display: "flex", flexDirection: "row", gap: 1, color: 'text.secondary' }}>
                                <a href="">
                                    <InstagramIcon />
                                </a>
                                <a href="">
                                    <TelegramIcon />
                                </a>
                                <a href="ed">
                                    <WhatsAppIcon />
                                </a>
                                <a href="">
                                    <LinkedInIcon />
                                </a>
                            </Container>
                            <Container sx={{marginLeft: -2.4}}>
                                <Typography fontSize={18}>+998972371022</Typography>
                                <Typography><a href="https://edu.uz" style={{ textDecoration: "none", color: "black", fontSize: 18 }}>www.edu.uz</a></Typography>
                            </Container>
                        </Container>
                    </Container>
                    <Typography sx={{ marginLeft: 6 }} className="footer-a">2025 ©  Barcha ququqlar himoylangan</Typography>
                </Container>
            </Container>


        </Box>
    )
}