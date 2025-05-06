# SpotifyData

A web application that analyzes your Spotify listening habits and provides personalized artist recommendations based on your top tracks and artists.

## Features
- Displays your top artists and tracks
- Calculates favorite genres from your listening history
- Recommends similar artists based on your preferences
- Shows your listening habits over different time frames (short_term, medium_term, long_term)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/MikilFoss/SpotifyData.git
   cd SpotifyData
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your Spotify API credentials.

4. Start the server:
   ```bash
   node server.js
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Dependencies
- express ^4.18.2
- mongodb ^6.2.0
- pug ^3.0.2
- querystring ^0.2.1
- request ^2.88.2
- dotenv ^16.3.1

## Time Frames
The application supports three time frames for data analysis:
- short_term: Last 4 weeks
- medium_term: Last 6 months
- long_term: All time
