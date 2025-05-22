export interface Photo {
  id: string;
  src: string;
  alt: string;
}

export const photos: Photo[] = [
  {
    id: '1',
    src: '/conference-room.svg',
    alt: 'Modern conference room with white table and chairs',
  },
  {
    id: '2',
    src: '/team-sports.svg',
    alt: 'Team celebrating at a sports event',
  },
  {
    id: '3',
    src: '/team-formal.svg',
    alt: 'Team in formal attire',
  },
  {
    id: '4',
    src: '/office-door.svg',
    alt: 'Wooden door with company logo',
  },
  {
    id: '5',
    src: '/workspace.svg',
    alt: 'Open office workspace',
  },
  {
    id: '6',
    src: '/cabin.svg',
    alt: 'Office cabin',
  },
];
