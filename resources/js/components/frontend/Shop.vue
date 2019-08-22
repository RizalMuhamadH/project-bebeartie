<template>
  <div>
    <!-- PAGE HEADER -->
    <div class="page_header">
      <div class="container">
        <div class="page_header_info text-center">
          <div class="page_header_info_inner">
            <h2>New Arrivals</h2>
            <p>Nunc tincidunt consequat elit vitae placerat. Sed id ex vel tortor ultrices accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <div class="ph_btn">
              <a href="#">Shop Men</a>
              <a href="#">Shop Women</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BREADCRUMBS -->
    <div class="bcrumbs">
      <div class="container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>New Arrivals</li>
        </ul>
      </div>
    </div>

    <!-- SHOP CONTENT -->
    <div class="shop-content">
      <div class="container">
        <div class="row">
          <aside class="col-md-3 col-sm-4">
            <!-- <div class="side-widget space50">
              <form role="form" class="search-widget">
                <input class="form-control" type="text" />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>-->
            <div class="side-widget">
              <h3>
                <span>Shop by</span>
              </h3>
              <h5>Categories</h5>
              <ul class="cat-list">
                <li v-for="item in categories" :key="item.id">
                  <div
                    class="btn-div"
                    :class="{active:item.id == selected}"
                    @click="fetchProductByCategory({id: item.id, name: item.name})"
                  >{{ item.name }}</div>
                </li>
              </ul>
              <div class="clearfix space30"></div>
            </div>
            <div class="clearfix space30"></div>
          </aside>
          <div class="col-md-9 col-sm-8">
            <h6>{{ title }}</h6>
            <div class="pagenav-wrap"></div>
            <div class="space50"></div>
            <div class="row">
              <div class="col-md-4 col-sm-6" v-for="item in allItem.data" :key="item.id">
                <div class="product-item">
                  <div class="item-thumb">
                    <span class="badge new">New</span>
                    <img :src="item.image_thumb" class="img-responsive" alt />
                    <div @click="showDetails(item)">
                      <i class="overlay-rmore fa fa-search quickview"></i>
                    </div>
                    <div class="product-overlay">
                      <a href="#" class="addcart fa fa-shopping-cart"></a>
                      <a href="#" class="compare fa fa-signal"></a>
                      <a href="#" class="likeitem fa fa-heart-o"></a>
                    </div>
                  </div>
                  <div class="product-info">
                    <h4 class="product-title">
                      <a href="#">{{ item.name }}</a>
                    </h4>
                    <span class="product-price">
                      {{ item.price | currency }}
                      <em v-if="item.status == 'Y'">- Sale</em>
                      <em v-else>- On Sold</em>
                    </span>
                    <!-- <div class="item-colors">
                    <a href="#" class="litebrown"></a>
                    <a href="#" class="white"></a>
                    <a href="#" class="red"></a>
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
            <div class="pagenav-wrap">
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <!-- Results:
                  <span>1 - 9 of 86 items</span>-->
                </div>
                <div class="col-md-6 col-sm-6">
                  <div>
                    <pagination :data="allItem" @pagination-change-page="fetchNextPage"></pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space50"></div>
      </div>
    </div>

    <div class="clearfix space20"></div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="fa fa-times"></i>
          </button>
          <div class="row">
            <div class="col-md-5 col-sm-6">
              <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" v-for="item in object.media.length" :key="item">
                    <img class="d-block w-100" :src="object.media[item].path" alt="First slide" />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>-->
              <div v-html="html">
                {{ html }}
                <!-- <carousel :data="slide"></carousel> -->
              </div>
            </div>
            <div class="col-md-7 col-sm-6">
              <div class="product-single">
                <div class="ps-header">
                  <!-- <span class="badge offer">-50%</span> -->
                  <h3>{{ object.name }}</h3>
                  <div class="ps-price">
                    <!-- <span>$ 200.00</span>  -->
                    {{ object.price | currency }}
                  </div>
                </div>

                <div class="ps-stock">
                  Stock:
                  {{ object.stock }}
                </div>
                <div class="sep"></div>
                <div class="space10"></div>
                <div class="row select-wraps">
                  <div class="col-md-5 col-sm-5">
                    <p>
                      Quantity
                      <span>*</span>
                    </p>
                    <input type="number" v-model="qty" placeholder="qty" @change="qualityHandler" />
                  </div>
                </div>
                <div class="space20"></div>
                <div class="space20"></div>
                <div class="space20"></div>
                <div class="share">
                  <!-- <span>
                    <a href="#" class="fa fa-heart-o" onclick="return false;"></a>
                    <a href="#" class="fa fa-signal" onclick="return false;"></a>
                    <a href="#" class="fa fa-envelope-o" onclick="return false;"></a>
                  </span>-->
                  <div class="addthis_native_toolbox"></div>
                </div>
                <div class="space20"></div>
                <div class="sep"></div>
                <a class="btn-color" @click="addCart({id: object.id, qty: qty})" href="#">Add to Bag</a>
                <button @click="details()" class="btn-black">Go to Details</button>
              </div>
            </div>
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
      object: {},
      isActive: false,
      html: "",
      slide: [],
      qty: 1
    };
  },
  computed: {
    ...mapGetters(["allItem", "selected", "title", "categories"])
  },
  created() {
    this.scrollToTop();
    this.fetchGetCategory();
    this.fetchProductAll();
    Fire.$on("scrollToUp", () => {
      this.scrollToTop();
    });
    Fire.$on("modalHide", data => {
      $("#myModal").modal("hide");
      $(".modal-backdrop").remove();
    });
  },
  methods: {
    ...mapActions([
      "fetchProductAll",
      "fetchNextPage",
      "fetchProductByCategory",
      "fetchGetCategory"
    ]),
    ...mapActions("cart", {
      addCart: "addCart"
    }),
    showDetails(item) {
      this.object = item;
      this.html = "";

      var photo = [];
      var html = "";
      for (let i = 0; i < this.object.media.length; i++) {
        photo[i] =
          '<img class="img-fluid" alt="Responsive image" src="' +
          this.object.media[i].path +
          '" />';

        var active = "";
        if (i == 0) {
          active = "active";
        }

        html +=
          '<div class="carousel-item ' +
          active +
          '"><img class="d-block w-100" src="' +
          this.object.media[i].path +
          '" alt="First slide"></div>';
      }
      this.html =
        '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel"><div class="carousel-inner">' +
        html +
        '</div><a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>';
      this.slide = photo;
      console.log(this.slide);

      $("#myModal").modal("show");
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    qualityHandler() {
      if (this.qty == 0) {
        this.qty = 1;
      }
    }
  }
};
</script>
