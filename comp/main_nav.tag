<main-nav>
  <nav class='navigation'>
    <section class='container'>
      <a class='navigation-title float-left' href='#/'>
        <svg class='img' height='16' version='1.1' viewBox='0 0 16 16' width='16'>
          <path class='logo-svgpath' d='M16 6.707c0-3.139-0.919-5.687-2.054-5.707 0.005-0 0.009-0 0.014-0h-1.296c0 0-3.044 2.287-7.425 3.184-0.134 0.708-0.219 1.551-0.219 2.523s0.085 1.816 0.219 2.523c4.382 0.897 7.425 3.184 7.425 3.184h1.296c-0.005 0-0.009-0-0.014-0.001 1.136-0.020 2.054-2.567 2.054-5.707zM13.513 11.551c-0.147 0-0.305-0.152-0.387-0.243-0.197-0.22-0.387-0.562-0.55-0.989-0.363-0.957-0.564-2.239-0.564-3.611s0.2-2.655 0.564-3.611c0.162-0.428 0.353-0.77 0.55-0.99 0.081-0.091 0.24-0.243 0.387-0.243s0.305 0.152 0.387 0.243c0.197 0.22 0.387 0.562 0.55 0.99 0.363 0.957 0.564 2.239 0.564 3.611s-0.2 2.655-0.564 3.611c-0.162 0.428-0.353 0.77-0.55 0.989-0.081 0.091-0.24 0.243-0.387 0.243zM3.935 6.707c0-0.812 0.060-1.6 0.173-2.33-0.74 0.102-1.39 0.161-2.193 0.161-1.048 0-1.048 0-1.048 0l-0.867 1.479v1.378l0.867 1.479c0 0 0 0 1.048 0 0.803 0 1.453 0.059 2.193 0.161-0.113-0.729-0.173-1.518-0.173-2.33zM5.752 10.034l-2-0.383 1.279 5.024c0.066 0.26 0.324 0.391 0.573 0.291l1.852-0.741c0.249-0.1 0.349-0.374 0.222-0.611l-1.926-3.581zM13.513 8.574c-0.057 0-0.118-0.059-0.149-0.094-0.076-0.085-0.149-0.217-0.212-0.381-0.14-0.369-0.217-0.863-0.217-1.392s0.077-1.023 0.217-1.392c0.063-0.165 0.136-0.297 0.212-0.381 0.031-0.035 0.092-0.094 0.149-0.094s0.118 0.059 0.149 0.094c0.076 0.085 0.149 0.217 0.212 0.381 0.14 0.369 0.217 0.863 0.217 1.392s-0.077 1.023-0.217 1.392c-0.063 0.165-0.136 0.297-0.212 0.381-0.031 0.035-0.092 0.094-0.149 0.094z'></path>
        </svg>
        <h1 class='title'>BlockedIn</h1>
      </a>
      <ul class='navigation-list float-left'>
        <li class='navigation-item'>
          <a class='navigation-link' href='#/professionals'>Professionals</a>
        </li>
        <li class='navigation-item'>
          <a class='navigation-link' href='#/organizations'>Organizations</a>
        </li>
        <li class='navigation-item'>
          <a class='navigation-link' href='#/universities'>Universities</a>
        </li>
      </ul>
      <ul class='navigation-list float-right'>
        <li class='navigation-item' if="{ dev || prod_host == 'bi1' }">
          <a class='navigation-link' href='#/user'>Profile</a>
        </li>
        <li class='navigation-item' if="{ dev || prod_host != 'bi1' }">
          <a class='navigation-link' href='#/org'>Organization</a>
        </li>
      </ul>
    </section>
  </nav>
  <script>
    (function() {
      this.dev = location.hostname === "localhost";
    
      this.prod_host = s(location.hostname).strLeft(".").value();
    
      console.log("dev", this.dev, "host", this.prod_host);
    
    }).call(this);
  </script>
</main-nav>
