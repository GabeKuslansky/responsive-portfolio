import Container from './Container';
import StyledLink from './StyledLink';

export default function Booking() {
  return (
    <Container>
      <p>
        To contact Gabe, email{' '}
        <StyledLink href={'mailto:kuslanskyg@gmail.com'}>kuslanskyg@gmail.com</StyledLink>.
        For booking inquiries, please describe your request as thoroughly as
        possible for an approximate quote.
      </p>
    </Container>
  );
}
