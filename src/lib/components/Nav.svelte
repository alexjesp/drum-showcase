<script>
  import { resolve } from '$app/paths';
</script>

<ul>
  <li><a href={resolve('/about')}>About</a></li>
  <li><a href={resolve('/releases')}>Releases</a></li>
  <li><a href={resolve('/media')}>Media</a></li>
  <li>
    <a href="mailto:contact@alexesp.co.uk" target="_blank" rel="noopener noreferrer">Contact</a>
  </li>
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    font-family: BebasNeueRegular;
    font-size: 2em;
    margin-top: 1em;
  }

  li {
    display: flex;
    flex: none;
    justify-content: flex-end;
  }

  a,
  a:visited {
    text-decoration: none;
    color: #000;
  }

  @media screen and (max-width: 740px) {
    li {
      justify-content: center;
    }
  }
</style>
