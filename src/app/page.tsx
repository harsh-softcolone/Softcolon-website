import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='flex items-center justify-center min-h-screen w-full'>
      <h1 className='font-hanuman text-8xl font-bold text-gradient'>hey b</h1>
      <Button variant='secondary' className='font-ibm-plex-sans'>
        Click me
      </Button>
    </main>
  );
}
