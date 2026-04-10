export interface Wallpaper {
  id: string;
  name: string;
  src: string;
  sourceUrl?: string; 
}

/**
 * Collection of available system wallpapers.
 * The first item in this array serves as the default background.
 */
export const wallpapers: Wallpaper[] = [
  { 
    id: 'wp-1', 
    name: 'Chrysos Heirs', 
    src: '/wallpapers/chrysos-heirs.jpg', 
    sourceUrl: 'https://4kwallpapers.com/games/honkai-star-rail-24697.html'
  },
  { 
    id: 'wp-2', 
    name: 'Amphoreus', 
    src: '/wallpapers/amphoreus.jpg',
    sourceUrl: 'https://4kwallpapers.com/games/honkai-star-rail-24493.html'
  },
  { 
    id: 'wp-3', 
    name: 'Astral Express', 
    src: '/wallpapers/astral-express.jpg',
    sourceUrl: 'https://4kwallpapers.com/games/honkai-star-rail-24854.html'
  },
  { 
    id: 'wp-4', 
    name: 'Cyrene', 
    src: '/wallpapers/cyrene.jpg',
    sourceUrl: 'https://4kwallpapers.com/anime/cyrene-honkai-star-24677.html'
  },
  { 
    id: 'wp-5', 
    name: 'Aglaea', 
    src: '/wallpapers/aglaea.jpg',
    sourceUrl: 'https://4kwallpapers.com/games/aglaea-honkai-star-rail-21112.html'
  },
  { 
    id: 'wp-6', 
    name: 'Evernight', 
    src: '/wallpapers/evernight.jpg',
    sourceUrl: 'https://4kwallpapers.com/games/evernight-honkai-24123.html'
  },
];