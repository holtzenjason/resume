<script>
  import { mobileShow } from "./store.js";
  import Icon from "./_icon.svelte";
  const iconSize = "20";
  import { slashBreak } from "./_mobileActions.js";
</script>

<aside>
  <div class="contactInfo">
    <ul>
      <li class="print-only">
        <Icon name="user" size={iconSize} />
        <a href="https://resume.holtzen.rocks">resume.holtzen.rocks</a>
      </li>
      <li>
        <Icon name="email" size={iconSize} />
        <span class="sr-only">email</span>
        <a href="mailto:jason@holtzen.rocks" use:slashBreak
          >jason@holtzen.rocks</a
        >
      </li>
      <li>
        <Icon name="phone" size={iconSize} color="inherit" />
        <span class="sr-only">phone</span>
        <a href="tel:6027933898">602.793.3898</a>
      </li>
      <li>
        <Icon name="address" size={iconSize} color="inherit" />
        <span class="sr-only">address</span>
        <a href="https://goo.gl/maps/aQSH5zFmQzUiGeZ89">
          <address>
            5608 East Circle<br />
            Bartlesville, OK
          </address>
        </a>
      </li>
      <li>
        <Icon name="linkedin" size={iconSize} color="inherit" />
        <span class="sr-only">LinkedIn</span>
        <a href="https://www.linkedin.com/in/holtzen" use:slashBreak
          >linkedin.com/in/holtzen</a
        >
      </li>
      <li>
        <Icon name="discord" size={iconSize} color="inherit" />
        <span class="sr-only">Discord</span>
        <a href="https://discordapp.com/users/holtzen#8590">holtzen#8590</a>
      </li>
    </ul>
  </div>
  <div class="skills">
    <h4>Core Skills</h4>
    <ul>
      <li>Svelte</li>
      <li>JavaScript</li>
      <li>Web Design</li>
      <li>MongoDB</li>
      <li>SQL</li>
      <li>Jest</li>
      <li>React</li>
    </ul>
  </div>
  {#if !$mobileShow}
    <div class="edu">
      <h4>Education</h4>
      <ul>
        <li>
          <strong>Bachelor's of Science</strong><br />
          <small> Software Development </small>
          <small>
            <a href="https://www.wgu.edu">WGU</a>
          </small>
        </li>
        <li>
          <strong>Project+ Certification</strong>
          <br />
          <small>CompTIA</small>
        </li>
        <li>
          <strong>A+ Certification</strong>
          <br />
          <small>CompTIA</small>
        </li>
      </ul>
    </div>
    <div class="mywork">
      <h4>My work</h4>
      <ul>
        <li>
          <a href="https://casterfire.holtzen.rocks">casterfire.holtzen.rocks</a
          >
        </li>
        <li>
          <a href="https://resume.holtzen.rocks">resume.holtzen.rocks</a>
        </li>
        <li>
          <a href="https://www.phillips66.com">phillips66.com</a>
        </li>
      </ul>
    </div>
    <div class="footnote">This site is print-friendly.</div>
  {/if}
</aside>

<style lang="scss">
  aside {
    flex: 1 1 25%;
    background: #333;
    color: white;
    font-size: 1.2rem;
    padding: 1.5rem;
    position: relative;
    height: auto;
    letter-spacing: 1px;
    order: 1;

    @media only screen and (max-width: 650px) {
      display: flex;
      flex: 1 1 50%;
      flex-flow: row nowrap;
      justify-content: space-between;
      font-size: 1.5rem;
    }

    @media print {
      background: none;
      border-right: 2px solid #333;
      font-size: 1rem;
      color: #333;
      padding: 1rem 1rem 0;
    }
  }
  h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-left: 0;
  }
  address {
    font-style: normal;
  }

  div {
    position: relative;

    @media only screen and (max-width: 650px) {
      width: 50%;
    }

    &::after {
      display: block;
      content: "";
      background-image: linear-gradient(85deg, var(--c1), var(--c2-dark));
      height: 0.3rem;
      margin: 1rem auto;
      width: 70%;

      @media only screen and (max-width: 650px) {
        position: absolute;
        right: 0;
        top: 15%;
        height: 70%;
        width: 0.3rem;
      }

      @media print {
        height: 0.2rem;
      }
    }

    &:last-of-type::after {
      display: none;
    }
  }

  ul {
    word-wrap: break-word;
  }

  li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (max-width: 650px) {
      --indent: 0.8rem;
      padding-left: var(indent);
      text-indent: calc(-1 * var(--indent));
    }

    &.print-only {
      display: none;
      @media print {
        display: flex;
      }
    }

    a {
      &,
      &:visited,
      &:active,
      &:focus {
        color: var(--c2);
        margin-left: 1rem;
        padding-bottom: 1rem;
        @media print {
          color: #555 !important;
        }
      }
    }
  }

  .contactInfo {
    @media only screen and (max-width: 650px) {
      height: 100%;
      width: 40%;

      ul {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        height: 100%;
        padding-right: 5px;
        li {
          max-width: 100%;
          width: 100%;
        }
      }
    }
  }

  .skills {
    ul {
      li {
        display: block;
        &:last-of-type {
          margin-bottom: 1.5rem;
        }

        strong {
          text-decoration: underline;
          text-transform: uppercase;
        }
      }
    }
    @media only screen and (max-width: 650px) {
      display: flex;
      flex-flow: column nowrap;
      height: 100%;
      width: 55%;

      h4 {
        margin-top: 0;
      }

      ul {
        columns: 2;
        height: 100%;
        li {
          display: block;
          margin-bottom: 0.3em;
          &:last-of-type {
            margin: 0;
          }
        }
      }
    }
  }

  .edu ul {
    li {
      display: block;
      margin-bottom: 1rem;
      &:last-of-type {
        margin-bottom: 1.5rem;
      }

      strong {
        text-transform: uppercase;
      }
    }
    small {
      font-size: 0.9em;
    }

    a {
      @media print {
        display: inline-block;
        margin: 0;
      }
    }
  }
  .mywork a {
    margin-left: 0;
  }
  .footnote {
    @media print {
      display: none;
    }
  }
</style>
