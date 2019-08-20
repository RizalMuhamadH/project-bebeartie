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
              <li v-if="isLoggedIn" class="nav-item">
                <router-link to="/shop" class="nav-link">Account</router-link>
              </li>
              <li class="nav-item">
                <div
                  v-if="!isLoggedIn"
                  class="nav-link"
                  style="cursor: pointer;"
                  @click="showLogin()"
                >Login</div>
                <div
                  v-if="isLoggedIn"
                  class="nav-link"
                  style="cursor: pointer;"
                  @click="logout()"
                >Logout</div>
              </li>
            </ul>
            <!-- Cart & Search -->
            <div class="header-xtra pull-right form-inline">
              <div class="topcart">
                <span>
                  <i class="fa fa-shopping-cart"></i>
                </span>
                <div class="cart-info" v-if="listItem.length > 0">
                  <small>
                    You have
                    <em class="highlight">{{ listItem.length }} item(s)</em> in your shopping bag
                  </small>
                  <div class="ci-item" v-for="item in listItem" :key="item.id">
                    <img :src="item.product.image_thumb" width="80" alt />
                    <div class="ci-item-info">
                      <h5>
                        <div>{{ item.product.name }}</div>
                      </h5>
                      <p>{{ item.quality }} x {{ item.product.price | currency }}</p>
                      <!-- <div class="ci-edit">
                        <a href="#" class="edit fa fa-edit"></a>
                        <a href="#" class="edit fa fa-trash"></a>
                      </div>-->
                    </div>
                  </div>

                  <div class="ci-total">Subtotal: {{ totalPrice | currency }}</div>
                  <div class="cart-btn">
                    <router-link to="/view">View Bag</router-link>
                    <a href="#">Checkout</a>
                  </div>
                </div>
                <div class="cart-info" v-else>Empty</div>
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
      <router-view :counter="count" :stat="stat"></router-view>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      form: new Form({
        email: "",
        password: ""
      }),
      //   user: {},
      listItem: [],
      totalPrice: 0,
      count: 0,
      stat: false
      //   isLoggedIn: localStorage.getItem("bebeartie.jwt") != null
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["isLoggedIn", "token", "user"])
  },
  created() {
    this.change();
    this.load();
    this.loadListItemCart();
    // this.setDefault();
    Fire.$on("mustLogin", data => {
      this.showLogin();
    });
    Fire.$on("addCart", data => {
      this.loadListItemCart();
    });
  },
  methods: {
    ...mapActions(["logged", "setDefault", "change"]),
    // setDefault() {
    //   if (this.isLoggedIn) {
    //     this.user = JSON.parse(localStorage.getItem("bebeartie.user"));
    //   }
    // },
    // change() {
    //   this.isLoggedIn = localStorage.getItem("bebeartie.jwt") != null;
    //   this.setDefault();
    // },
    login() {
      this.$Progress.start();
      this.form
        .post("frontend/member/login")
        .then(res => {
          //   localStorage.setItem(
          //     "bebeartie.user",
          //     JSON.stringify(res.data.account)
          //   );

          //   localStorage.setItem("bebeartie.jwt", res.data.access_token);

          this.logged(res.data.access_token, res.data.account);
          console.log(res);
          //   this.change();
          this.$Progress.finish();

          $("#modalLogin").modal("hide");
          $(".modal-backdrop").remove();

          Fire.$emit("addCart", true);
        })
        .catch(err => {
          console.log(err);
          this.$Progress.fail();
        });
    },
    logout() {
      console.log(this.user.id);
      axios
        .post("frontend/member/logout", { id: this.user.id })
        .then(res => {
          console.log(res);

          this.change();
          this.listItem = [];
          //   this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
    },
    loadListItemCart() {
      if (localStorage.getItem("bebeartie.jwt") != null) {
        // this.$Progress.start();
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("bebeartie.jwt");

        let user = JSON.parse(localStorage.getItem("bebeartie.user"));

        axios
          .get("api/cart/show/" + user.id)
          .then(res => {
            this.listItem = res.data;
            this.lengthItem = this.listItem.length;

            this.totalPrice = 0;

            for (let i = 0; i < this.listItem.length; i++) {
              this.totalPrice +=
                this.listItem[i].quality * this.listItem[i].product.price;
              console.log(this.totalPrice);
            }
            // this.$Progress.finish();
            console.log(res);
          })
          .catch(err => {
            // this.$Progress.fail();
            console.error(err);
          });
      }
    },
    showLogin() {
      $("#modalLogin").modal("show");

      this.form.reset();
    },
    load() {
      this.$router.push("/front");
    }
    // addCart(add) {
    //   this.count += add;
    // }
  }
};
</script>
