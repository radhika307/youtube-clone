const GOOGLE_API_KEY = "AIzaSyBDOS0Zi1SMig800hYSvx3Aeb9wNCvlL9o";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;
