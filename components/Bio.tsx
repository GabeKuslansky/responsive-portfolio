import Container from "./Container";
import StyledLink from "./StyledLink";

const Bio = () => (
  <Container>
    <div className="text-md m-auto break-words tracking-wide">
      <p>
        Gabe Kuslansky is a multi-genre pianist in NYC. He performs regularly as a solo pianist at famed Broadway
        restaurant, <StyledLink href="https://www.chezjosephine.com/entertainment.html">Chez Josephine</StyledLink>,
        with vocalists and jazz trios. He has also made appearences at Prohibition, Hutaoli and Bettola. Check out his{" "}
        <StyledLink href="/gigs">upcoming gigs</StyledLink> to see where to catch him next and visit his{" "}
        <StyledLink href="/booking">booking page</StyledLink> to reserve him for private events.
      </p>
      <br />
      <p>
        While mostly self-trained, he studied music theory and jazz under Reuben Allen at Juilliard in 2020 and Michael
        "Doc" Woods at Hamilton College in 2019, where he performed on piano in the jazz ensemble.
      </p>
      <br />
      <p>
        Born and raised on the Upper West Side of Manhattan, Gabe was introduced to piano at age two and gave his first
        piano recital before age five. Although he explored different areas of music throughout childhood, he started
        seriously playing piano at age 18 with private lessons, while learning to read sheet the final months of high
        school.
      </p>
      <br />
      <p>
        Inspirations for his voice on the piano are Chet Baker, Russ Freeman (Pianist for Chet Baker), Bill Evans, John
        Campbell (Pianist for Mel Torme), Scott Joplin, Laurence Hobgood (Pianist for Kurt Elling), Red Garland, Oscar
        Peterson, Chick Corea, Bud Powell and McCoy Tyner. He appreciates every style of music, and uniquely blends his
        delicate and sophisticated voice onto the piano for every song. Gabe has worked collaboratively with wedding
        planners, chamber ensembles, big bands, singers, and session musicians in a studio.
      </p>
      <br />
      <p>Gabe also works as a full-time Software Engineer and developed this website himself from scratch.</p>
    </div>
  </Container>
);

export default Bio;
