import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// MovieCard to be used in the home page to display each movie
// Take posters path and displays them in a card format
// Underneath the poster is the title, rating, and release date
const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    return ( // card inside link is clickable
    <Link href={`/movie/${id}`} asChild>
        <TouchableOpacity className="w-[30%]">
            <Image
                source= {{
                    uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://placehold.co/600x400/1a1a1a1a/ffffff.png`
                }}
                className="w-full h-52 rounded-lg"
                resizeMode="cover"
            />
            <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>{title}</Text>
            
            <View className="flex-row items-center justify-start gap-x-1">
                <Image source={icons.star} className="size-4" />
                <Text className="text-xs text-white font-bold uppercase">{Math.round(vote_average/2)}</Text>
            </View>

            <View className="flex-row items-center justify-between">
                <Text className="text-xs text-light-300 font-medium mt-1">
                    {release_date?.split('-')[0]} {/* Display only the year from the release date */}
                </Text>
                {/* <Text className="text-xs font-medium text-light-300 uppercase">
                    Movie
                </Text> */}
            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard