import Container from './Container';

export default function Gigs() {
  return (
    <Container>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23fdfbed&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&mode=AGENDA&title=Gigs&src=MXBvZDBnMWIxM2Z1Y2MwM3Qza3UzN3U1ZWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23fdfbed"
        style={{ border: 'solid 1px #777' }}
        width="800"
        height="500"
        scrolling="no"
      ></iframe>
    </Container>
  );
}
