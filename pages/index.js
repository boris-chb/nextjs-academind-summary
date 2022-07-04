import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'The First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Stadtbild Square, Munich',
    description: 'Nextjs devs meetup. See you there soon',
  },
  {
    id: 'm2',
    title: 'Our Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Feldherrnhalle_-_Odeonsplatz.jpg/1024px-Feldherrnhalle_-_Odeonsplatz.jpg',
    address: 'Odeonplatz, Munich',
    description: 'Bring your friends too!',
  },
];

function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}
export default HomePage;
