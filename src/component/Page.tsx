import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "react-router";
import type { universityPayload } from "../features/types";
import { fetchUniversity } from "../Service/Service";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Pagination, PaginationItem } from "@mui/material";
import picture from "../assets/study.jpg";

export function KnowledgePage() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const limit = 6;

    const { data, isLoading, isError, error } = useQuery<universityPayload[]>({
        queryKey: ["study"],
        queryFn: fetchUniversity,
    })

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>{(error as Error).message}</p>;

    const totalPages = Math.ceil(data!.length / limit);
    const paginated = data!.slice((page - 1) * limit, page * limit);

    return (
        <main style={{ marginLeft: 379, paddingTop: 40, display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 17 }}>
            {paginated.map((u) => (
                <Card key={u.name} sx={{ maxWidth: 532 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={picture} style={{ width: 300, height: 176, marginLeft: -10 }}
                        title="green iguana"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {u.name}
                        </Typography >
                        <Typography >
                            Rasmiy sayt
                        </Typography >
                        <Typography gutterBottom variant="h6" component="div" sx={{ display: "flex", flexDirection: "column", color: "blue" }}>
                            {u.web_pages}
                        </Typography>
                        <Typography variant="body1" fontSize={18} sx={{ color: 'text.secondary' }}>
                            Ozbekiston Respublikasi oliy oquv yurtlarida olgan bilimlaringiz bilan kelajakgizni yarating.Bizning oliy oquv yurtlarimizda tajribali oqituvchilardan yangi konikmalarga ega boling
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Biz qaqqimizda</Button>
                    </CardActions>
                </Card>
            ))}
            <Pagination
                page={page}
                count={totalPages}
                sx={{ mt: 3, pb: 5, marginLeft: 30 }}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                    />
                )}
            />
        </main>
    );
}