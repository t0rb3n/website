// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getCurrentlyPlaying} from "../../lib/spotify";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getCurrentlyPlaying();
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  console.log(song);

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  const songLength = song.item.duration_ms;
  const songProgress = song.progress_ms;


  res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    songLength,
    songProgress,
  });
}
