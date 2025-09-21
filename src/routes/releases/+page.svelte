<script lang="ts">
  import { asset } from '$app/paths';

  type Release = {
    imgSrc: string;
    href: string;
    title: string;
    type: string;
    artist: string;
    description: string;
  };

  export const data: Release[] = [
    {
      imgSrc: './images/displaced-love.jpg',
      href: 'https://theyachtclub.bandcamp.com/album/i-dont-think-that-i-am-ready-to-be-without-you',
      title: "I Don't Think That I Am Ready To Be Without You",
      type: 'EP',
      artist: 'The Yacht Club',
      description: 'Drums / Keys'
    },
    {
      imgSrc: './images/muttering-tyc-avenues.jpg',
      href: 'https://open.spotify.com/track/29EnOI8l0AP6p68gsRMnJZ?si=9840e2ac7fc343eb',
      title: 'Avenues',
      type: 'Single',
      artist: 'The Yacht Club / Muttering',
      description: 'Drums'
    },
    {
      imgSrc: './images/muttering-tyc-still-hurts.jpg',
      href: 'https://open.spotify.com/track/3jgZFrOlWRZTJQqmeK1LzG?si=F8n5yZJzR5SINGgbicmH_A',
      title: "It's Only the Beginning But It Still Hurts",
      type: 'Single',
      artist: 'The Yacht Club / Muttering',
      description: 'Drums'
    },
    {
      imgSrc: './images/stumbling.jpg',
      href: 'https://theyachtclub.bandcamp.com/album/stumbling',
      title: 'Stumbling',
      type: 'Single',
      artist: 'The Yacht Club',
      description: 'Drums / Keys'
    },
    {
      imgSrc: './images/lv-one.jpg',
      href: 'https://ourlittlevictories.bandcamp.com/track/another-rush',
      title: 'Another Rush',
      type: 'Single',
      artist: 'Little Victories',
      description: 'Drums'
    },
    {
      imgSrc: './images/lv-not-giving-up.jpg',
      href: 'https://ourlittlevictories.bandcamp.com/track/not-giving-up',
      title: 'Not Giving Up',
      type: 'Single',
      artist: 'Little Victories',
      description: 'Drums'
    },
    {
      imgSrc: './images/hellions-single-cover.jpg',
      href: 'https://open.spotify.com/album/1U79XUlANDpMlnZQuUTs23?si=wfaObvcZQlaNjfAh_2n9mw',
      title: 'Hellions',
      type: 'Single',
      artist: 'Young Astronaut',
      description: 'Drums'
    },
    {
      imgSrc: './images/hope-single-cover.jpg',
      href: 'https://open.spotify.com/album/4PLisKJNR5TN8A4nvwdQYX?si=GfYngFn8QhCYVImw-654Kw',
      title: 'Hope',
      type: 'Single',
      artist: 'Young Astronaut',
      description: 'Drums'
    },
    {
      imgSrc: './images/lcpc-everything-is-fine-ep.jpg',
      href: 'https://leecarvallosputtingchallenge.bandcamp.com',
      title: 'Everything Is Fine',
      type: 'EP',
      artist: "Lee Carvallo's Putting Challenge",
      description: 'Drums'
    },
    {
      imgSrc: './images/theyachtclub-lp1-front.jpg',
      href: 'https://open.spotify.com/album/01IS5APLJsk4Q7ungYwp9O?si=yxNGJzlpTHaydT8_NIi7mA',
      title: 'The Last Words That You Said To Me Have Kept Me Here And Safe',
      type: 'LP',
      artist: 'The Yacht Club',
      description: 'Drums, Piano, Rhodes, Organ, Percussion and Backing Vocals'
    },
    {
      imgSrc: './images/theyachtclub-fall.jpg',
      href: 'https://theyachtclub.bandcamp.com/album/fall',
      title: 'Fall',
      type: 'EP',
      artist: 'The Yacht Club',
      description: 'Drums, Piano, Rhodes, Organ, Percussion'
    },
    {
      imgSrc: './images/raad-indignities.jpg',
      href: 'http://raadp.bandcamp.com/releases',
      title: 'Indignities',
      type: 'EP',
      artist: 'RAAD',
      description: 'Drums, Percussion'
    },
    {
      imgSrc: './images/theyachtclub-self.jpg',
      href: 'https://theyachtclub.bandcamp.com/album/the-yacht-club',
      title: 'The Yacht Club',
      type: 'EP',
      artist: 'The Yacht Club',
      description: 'Drums, Percussion, Keyboards'
    },
    {
      imgSrc: './images/theyachtclub-a.jpg',
      href: 'https://theyachtclub.bandcamp.com/album/a',
      title: 'A',
      type: 'EP',
      artist: 'The Yacht Club',
      description: 'Drums, Percussion'
    },
    {
      imgSrc: './images/outliers.jpg',
      href: 'https://soundcloud.com/thomashillrecording/rock-outliers-home',
      title: 'Home',
      type: 'Single',
      artist: 'Outliers',
      description: 'Drums'
    },
    {
      imgSrc: './images/daphnetae.jpg',
      href: 'https://toarmsetcofficial.bandcamp.com/album/the-ghost-of-daphne-workshy',
      title: 'The Ghost of Daphne',
      type: 'Single',
      artist: 'To Arms Etc',
      description: 'Drums'
    }
  ];
</script>

<ul>
  {#each data as release, key (key)}
    <li>
      <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
      <a href={release.href} target="_blank" rel="noopener noreferrer">
        <img
          src={asset(release.imgSrc)}
          alt={`${release.title} - ${release.artist} - ${release.description}`}
        />
      </a>
      <div class="info">
        <h2 class="title">{release.title}</h2>
        <h3 class="artist">
          {release.artist} <span class="release-type">({release.type})</span>
        </h3>
        <p class="description">{release.description}</p>
      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
  }

  @media screen and (max-width: 740px) {
    ul {
      font-size: 13px;
      line-height: 1.3;
    }

    .title {
      line-height: 1.2;
      font-size: 18px;
      margin-bottom: 0.4em;
    }

    a {
      min-width: 75px;
    }

    .description {
      font-size: 12px;
      line-height: 1.2;
    }
  }

  li {
    display: flex;
    margin-bottom: 3em;
    width: 100%;
  }

  .title {
    font-size: 1.2em;
    line-height: 1.3;
    margin-bottom: 0.2em;
  }

  .artist {
    font-size: 0.9em;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 1em;
  }

  .release-type {
    font-size: 1em;
    color: rgba(0, 0, 0, 0.7);
  }

  a {
    margin-right: 2em;
    transition: 0.2s opacity linear;
    width: 35%;
    flex: none;
    max-width: 200px;
    min-width: 100px;
  }

  a:hover {
    opacity: 0.8;
  }

  .info {
    flex: 1;
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .description {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1em;
    white-space: pre-wrap;
  }
</style>
