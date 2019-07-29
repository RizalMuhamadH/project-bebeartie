<template>
  <div>

    <!-- <header> -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/front" class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <!-- Cart & Search -->
          <div class="header-xtra pull-right form-inline">
            <div class="topcart">
              <span>
                <i class="fa fa-shopping-cart"></i>
              </span>
              <div class="cart-info">
                <small>
                  You have
                  <em class="highlight">3 item(s)</em> in your shopping bag
                </small>
                <div class="ci-item">
                  <img src="images/products/fashion/8.jpg" width="80" alt />
                  <div class="ci-item-info">
                    <h5>
                      <a href="./single-product.html">Product fashion</a>
                    </h5>
                    <p>2 x $250.00</p>
                    <div class="ci-edit">
                      <a href="#" class="edit fa fa-edit"></a>
                      <a href="#" class="edit fa fa-trash"></a>
                    </div>
                  </div>
                </div>
                <div class="ci-item">
                  <img src="images/products/fashion/15.jpg" width="80" alt />
                  <div class="ci-item-info">
                    <h5>
                      <a href="./single-product.html">Product fashion</a>
                    </h5>
                    <p>2 x $250.00</p>
                    <div class="ci-edit">
                      <a href="#" class="edit fa fa-edit"></a>
                      <a href="#" class="edit fa fa-trash"></a>
                    </div>
                  </div>
                </div>

                <div class="ci-total">Subtotal: $750.00</div>
                <div class="cart-btn">
                  <a href="#">View Bag</a>
                  <a href="#">Checkout</a>
                </div>
              </div>
            </div>
            <div class="topsearch">
              <span>
                <i class="fa fa-search"></i>
              </span>
              <form class="searchtop">
                <input type="text" placeholder="Search entire store here." />
              </form>
            </div>
          </div>
        </div>
      </nav>
    <!-- </header> -->
    <!-- </header> -->
    <div class="is-fluid">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      this.$router.push("/front");
    }
  }
};
</script>
