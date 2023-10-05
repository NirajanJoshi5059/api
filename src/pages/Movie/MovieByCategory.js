import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useParams } from 'react-router';
import { useMovieByCategoryQuery } from '../../features/movieApi';
import Loading from '../../components/Loading';
import { imageUrl } from '../../features/constants';

const MovieByCategory = () => {
    const {category} = useParams();
    const { isError, isLoading, error, data } = useMovieByCategoryQuery(category ?? 'now_playing');
    console.log(data)

    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <div className='grid grid-cols-4 p-2 bg-gray-300/10'>
                {data && data.results.map((movie) => {
                    return <div key={movie.id}>
                        <Card className="max-w-full m-2">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                    src={`${imageUrl}/${movie.poster_path}`}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography
                                    variant="small"
                                    color="black"
                                    className="font-semibold text-lg ">
                                    {movie.title}
                                </Typography>
                                <div className="mb-1 flex items-center justify-between">
                                    <Typography color="blue-gray" className="font-light opacity-70">
                                        {movie.vote_average}
                                    </Typography>
                                    <Typography color="blue-gray" className="font-light">
                                        {movie.release_date}
                                    </Typography>
                                </div>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none text-sm
                                    hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                                    Read More ...
                                </Button>
                            </CardFooter>
                        </Card>

                    </div>
                })}
            </div>

        </>
    )
}

export default MovieByCategory
