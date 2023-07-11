<svg viewbox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <circle
      id="circle"
      cx="6.3499999"
      cy="-6.3499999"
      r="6.3499999"
      transform="scale(1,-1)"
    />
    <clipPath id="clip-circle">
      <use xlink:href="#circle" />
    </clipPath>
    <g id="monogram">
      <path
        id="J"
        d="m 5.189088,1.6477968 v 3.3569009 2.9770792 a 1.0583332,-1.0583332 0 0 1 0,0.01602 A 1.0583332,-1.0583332 0 0 1 4.1307547,9.0561299 1.0583332,-1.0583332 0 0 1 3.0724214,7.9977966 H 0.95575466 a 3.175,-3.175 0 0 0 3.17500004,3.1749994 3.175,-3.175 0 0 0 3.175,-3.1749994 V 1.6477968 Z"
      />
      <path
        id="H"
        d="m 5.189088,1.6477968 v 6.3339801 a 1.0583332,-1.0583332 0 0 1 0,0.01602 3.175,-3.175 0 0 0 1.0588501,2.3662631 3.175,-3.175 0 0 0 1.0578166,-2.3502434 1.0583332,-1.0583332 0 0 1 0,-0.01602 V 1.6477968 Z m 3.175,3.1749998 a 3.175,-3.175 0 0 0 -3.175,3.175 h 2.1166667 a 1.0583332,-1.0583332 0 0 1 1.0423136,-1.0583333 1.0583332,-1.0583332 0 0 1 0.01602,0 1.0583332,-1.0583332 0 0 1 1.0583333,1.0583333 v 2.9936144 0.181385 H 11.539087 V 7.9977966 a 3.175,-3.175 0 0 0 -3.174999,-3.175 z"
      />
    </g>
  </defs>
  <g id="logo" clip-path="url(#clip-circle)">
    <use xlink:href="#circle" class="outline" />
    <use xlink:href="#monogram" class="underneath" />
    <use xlink:href="#monogram" />
  </g>
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
  }
  #J {
    opacity: 1;
    fill: var(--c2);
    fill-opacity: 0.75;
    stroke-width: 0.264583;
  }

  #H {
    opacity: 1;
    fill: var(--c1);
    fill-opacity: 0.75;
    stroke-width: 0.229136;
  }

  :global(.underneath #H, .underneath #J) {
    fill: #ffffff;
  }

  .outline {
    fill: #333;
    fill-opacity: 1;
    stroke-width: 0.564583;
    stroke: #333;
  }
</style>
