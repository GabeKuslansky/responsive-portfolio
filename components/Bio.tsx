import StyledLink from "./StyledLink";

const Bio = () => (
  <div className="w-screen">
    <div className="90% text-md m-auto pt-[5rem] break-words tracking-wide p-10">
      <p>
        Gabe Kuslansky is multi-genre pianist in NYC. He performs regularly at Chez Josephine with vocalists, jazz
        trios, and as a solo pianist. He has also made appearances at Prohibition, Hutaoli and Bettola. Check out his{" "}
        <StyledLink href="/gigs">upcoming gigs</StyledLink> to see where to catch him next, and visit his{" "}
        <StyledLink href="/booking">booking page</StyledLink> to reserve him for a private event.
      </p>
      <br />
      <p>
        While mostly self-guided, he studied music theory and jazz under Reuben Allen at Juilliard in 2020, and Michael
        Woods at Hamilton College in 2019. Born and raised on the Upper West Side of Manhattan, Gabe was first
        introduced to piano at two years old. Although he explored different areas of music throughout his childhood, he
        started seriously playing piano at 18 years old time with private piano lessons at home while learning to read
        sheet music at the final months of high school.
      </p>
      <br />
      <p>
        {" "}
        His inspirations for his voice on the piano are Chet Baker, Russ Freeman (Pianist for Chet Baker), Bill Evans,
        John Cambell (pianist for Mel Torme), Laurence Hobgood (Pianist for Kurt Elling), Red Garland, Oscar Peterson,
        Chick Corea, Bud Powell and McCoy Tyner. He appreciates every style of music, and uniquely blends his delicate
        and sophisticated voice onto the piano for every song. Gabe has worked collaboratively with wedding planners,
        chamber ensembles, big bands, singers, and session musicians in a studio.
      </p>
      <br />
      <p>
        Gabe works as a full-time Software Engineer for Booz Allen Hamilton. and developed this website himself
        from scratch.
      </p>
    </div>
  </div>
);

export default Bio;
