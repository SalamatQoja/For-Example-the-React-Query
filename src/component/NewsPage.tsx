import { Box, Container, Typography } from "@mui/material";
import news1 from "../assets/news.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/img22.jpg";
import news4 from "../assets/news4.jpg";
import news5 from "../assets/news5.jpg";
import news6 from "../assets/news6.jpg";
import {  grey } from "@mui/material/colors";

export function NewsPage() {
    const fonts = grey[700];
    return (
        <Box sx={{ width: 270, border: 1, borderRadius: 2, mt: 3, borderColor: "gainsboro",
         position: "absolute", top:115, left:94, pb:3 }}>
            <Typography variant="h5" pt={2} textAlign="center" color={fonts} fontWeight={500}>Yangiliklar</Typography>
            <hr style={{ width: 240 }} className="reveal" />
            <Container sx={{ width: 335, pt: 3.3, display: "flex", flexDirection: "column", margin: "auto", marginLeft: -4 }}>
                <Container sx={{ height: "auto", pb:2,display: "flex", flexDirection: "column", gap: 1.2 }}>
                    <img src={news1} alt="picture" height={100} />
                    <Typography sx={{ color: "gray" }}>
                        25-noyabr 11:59
                    </Typography>
                    <Typography>Xalqaro konferenstya: "Raqamli transfarmastya davrida pedagokik talimni rivojlantirish istiqbollari"</Typography>
                </Container>
                <Container sx={{ height: "auto", pb:2,display: "flex", flexDirection: "column", gap: 1.2 }}>
                    <img src={news2} alt="picture" height={100} />
                    <Typography sx={{ color: "gray" }}>
                        18-noyabr 17:10
                    </Typography>
                    <Typography>
                        Oqishga kirolmagan abiturentlarga oltinchi imkoniyatni berish qachondan boshlanadi?
                    </Typography>
                </Container>
                <Container sx={{ height: "auto",pb:2 ,display: "flex", flexDirection: "column", gap: 1.2 }}>
                    <img src={news3} alt="picture" height={100} />
                    <Typography sx={{ color: "gray" }}>
                        10-oktabr 10:00
                    </Typography>
                    <Typography>Ozbekiston va Finlandiya: "Talim soxasidai yangi urfqlar ochilmoqda"</Typography>
                </Container>

                <Container sx={{ height: "auto",pb:2, display: "flex", flexDirection: "column", gap: 1.2 }}>
                    <img src={news4} alt="picture"  height={100} />
                    <Typography sx={{color: "gray"}}>20-sentyabr 20:00</Typography>
                    <Typography>Xalqaro Nordik Universitetida oqish qanday imkonyatini ochadi?</Typography>
                </Container>
                <Container sx={{ height: "auto", pb:2,display: "flex", flexDirection: "column", gap: 1.2 }}>
                    <img src={news5} alt="picture" height={100} />
                    <Typography sx={{color: "gray"}}>27-avgust 09:30</Typography>
                    <Typography>Ichki ishkar organlari xodimlarning farzandlari 5%li davlat grant asosoda kvota taqsimoti</Typography>
                </Container>
                <Container sx={{ height: 230, display: "flex", flexDirection: "column", gap: 1.2 }}>
                    <img src={news6} alt="picture" height={100} />
                    <Typography sx={{color: "gray"}}>10-avgust 22:20</Typography>
                    <Typography>Yiqilgan abiturentl ham talaba bolishi mumkin! Hatto hujjat topshirishga ulgurmagan va imtixonga kechikkanlar ham </Typography>
                </Container>
            </Container>
        </Box>
    )
}