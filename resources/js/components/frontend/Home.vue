<template>
  <div>
    <!-- TOPBAR -->
    <!-- <div class="top_bar">
      <div class="container">
        <div class="row">
          <div class="row">
            <div class="col-md-12">
              <div class="tb_left pull-left">
                <p>Welcome to our online store !</p>
              </div>
              <div class="tb_center pull-left">
                <ul>
                  <li>
                    <i class="fa fa-phone"></i> Hotline:
                    <a href="#">(+800) 2307 2509 8988</a>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o"></i>
                    <a href="#">online support@smile.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->

    <header id="header3">
      <nav class="navbar navbar-expand-lg navbar-light" id="nav">
        <div class="container">
          <!-- <a class="navbar-brand" href="#">Navbar</a> -->
          <img src="design/images/basic/logo.png" class="img-responsive" alt />
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
              <li class="nav-item">
                <router-link to="/front" class="nav-link" href="#">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/shop" class="nav-link">Shop</router-link>
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
                <div class="nav-link" style="cursor: pointer;" @click="showLogin()">Login</div>
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
        </div>
      </nav>
    </header>
    <!-- </header> -->
    <div class="is-fluid">
      <router-view :counter="count" :stat="stat" v-on:addCart="addCart($event)"></router-view>
    </div>
    <!-- FOOTER -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3 widget-footer col-sm-3">
            <h5>About Store</h5>
            <img src="images/basic/logo-lite.png" class="img-responsive space10" alt />
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus</p>
            <div class="clearfix"></div>
            <ul class="f-social">
              <li>
                <a href="https://www.facebook.com" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="https://www.twitter.com" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="https://feedburner.google.com" class="fa fa-rss"></a>
              </li>
              <li>
                <a href="mailto:email@website.com" class="fa fa-envelope"></a>
              </li>
              <li>
                <a href="https://www.pinterest.com" class="fa fa-pinterest"></a>
              </li>
              <li>
                <a href="https://www.instagram.com" class="fa fa-instagram"></a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-3 widget-footer">
            <h5>Latest Tweets</h5>
            <div class="tweet-info">
              <div id="twitterfeed"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 widget-footer">
            <h5>Product tags</h5>
            <ul class="widget-tags">
              <li>
                <a href="#">fashion</a>
              </li>
              <li>
                <a href="#">freedom</a>
              </li>
              <li>
                <a href="#">design</a>
              </li>
              <li>
                <a href="#">gallery</a>
              </li>
              <li>
                <a href="#">collection</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-3 widget-footer">
            <!-- <h5>Newsletter</h5>
            <p>Sign up for our newsletter and promotions</p>
            <form class="newsletter">
              <input type="text" placeholder="Enter your email address here." />
              <button type="submit">Subscribe !</button>
            </form>-->
          </div>
        </div>
      </div>
    </footer>

    <!-- Modal -->
    <div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="fa fa-times"></i>
          </button>
          <div class="row">
            <!-- <div class="col-md-6 col-sm-6"> -->
            <!-- HTML -->
            <div id="account-id">
              <h4 class="account-title">
                <span class="fa fa-chevron-right"></span>Login
              </h4>
              <div class="account-form">
                <form class="form-login" @submit.prevent="login()">
                  <ul class="form-list row">
                    <!-- <li class="col-md-6 col-sm-12">
                        <a href="#" class="btn facebook">
                          <i class="fa fa-facebook"></i>Sign in with Facebook
                        </a>
                      </li>
                      <li class="col-md-6 col-sm-12">
                        <a href="#" class="btn twitter">
                          <i class="fa fa-twitter"></i>Sign in with Twitter
                        </a>
                    </li>-->
                    <li class="col-md-12 col-sm-12">
                      <label>
                        Email
                        <em>*</em>
                      </label>
                      <input
                        v-model="form.email"
                        id="email"
                        required
                        type="email"
                        class="input-text"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                      />
                      <has-error :form="form" field="email"></has-error>
                    </li>
                    <li class="col-md-12 col-sm-12">
                      <label>
                        Your password
                        <em>*</em>
                      </label>
                      <input
                        required
                        v-model="form.password"
                        id="password"
                        name="password"
                        type="password"
                        class="input-text"
                        :class="{ 'is-invalid': form.errors.has('password') }"
                      />

                      <has-error :form="form" field="password"></has-error>
                    </li>
                    <li class="col-md-6 col-sm-12">
                      <input class="input-chkbox" type="checkbox" />
                      <label>Remember me</label>
                    </li>
                    <li class="col-md-6 col-sm-12 pwd text-right">
                      <label>
                        <a href="#">forgot password?</a>
                      </label>
                    </li>
                  </ul>
                  <div class="buttons-set">
                    <button class="btn-black" type="submit">
                      <span>login</span>
                    </button>
                    <div class="btn-black" style="cursor: pointer;">
                      <span>Register</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: new Form({
        email: "",
        password: ""
      }),
      count: 100,
      stat: false,
      isLoggedIn: localStorage.getItem("bebeartie.jwt") != null
    };
  },
  mounted() {},
  created() {
    this.load();
    Fire.$on("mustLogin", data => {
      this.showLogin();
    });
  },
  methods: {
    setDefault() {
      if (this.isLoggedIn) {
        let member = JSON.parse(localStorage.getItem("bebeartie.user"));
      }
    },
    change() {
      this.isLoggedIn = localStorage.getItem("bebeartie.jwt") != null;
      this.setDefaults();
    },
    login() {
      this.form.post('frontend/member/login').then((value) => {
         console.log(value);
      }).catch((err) => {
          console.log(err);
      })
    },
    logout() {
      localStorage.removeItem("bebeartie.jwt");
      localStorage.removeItem("bebeartie.user");
      this.change();
      this.$router.push("/");
    },
    showLogin() {
      $("#modalLogin").modal("show");
    },
    load() {
      this.$router.push("/front");
    },
    addCart(add) {
      this.count += add;
    }
  }
};
</script>
