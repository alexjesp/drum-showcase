<script>
  import SpotifyIcon from '$lib/icons/SpotifyIcon.svelte';
  import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
  import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
  import YouTubeIcon from '$lib/icons/YouTubeIcon.svelte';
</script>

<ul>
  <li>
    <a
      href="https://open.spotify.com/playlist/4m8PLSLCebqzglQnGs6AHU?si=0b70c9200b0c4d75"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SpotifyIcon />
    </a>
  </li>
  <li>
    <a href="https://instagram.com/aespdrum" target="_blank" rel="noopener noreferrer">
      <InstagramIcon />
    </a>
  </li>
  <li>
    <a href="https://github.com/alexjesp" target="_blank" rel="noopener noreferrer">
      <GitHubIcon />
    </a>
  </li>
  <li>
    <a href="https://youtube.com/aespdrum" target="_blank" rel="noopener noreferrer" class="wider">
      <YouTubeIcon />
    </a>
  </li>
</ul>

<style>
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    position: fixed;
    top: 50px;
  }

  li {
    margin-right: 10px;
    flex: none;
  }

  a {
    display: inline-block;
    fill: #000;
    width: 24px;
  }

  .wider {
    width: 57px;
  }

  @media screen and (min-width: 740px) and (max-width: 1100px) {
    ul {
      position: static;
    }
  }

  @media screen and (max-width: 740px) {
    ul {
      position: static;
    }
  }
</style>
