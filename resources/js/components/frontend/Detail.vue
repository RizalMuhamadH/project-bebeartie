<template>
  <div>
    <!-- BREADCRUMBS -->
    <div class="bcrumbs">
      <div class="container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>Product Fashion</li>
        </ul>
      </div>
    </div>

    <div class="space10"></div>

    <!-- MAIN CONTENT -->
    <div class="shop-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-5 col-sm-6">
                <div>
                  <carousel :data="slide"></carousel>
                </div>
              </div>
              <div class="col-md-7 col-sm-6">
                <div class="product-single">
                  <div class="ps-header">
                    <span class="badge offer">{{ promote.discount }}%</span>
                    <h3>{{ product.name }}</h3>
                    <div class="ps-price">{{ product.price | currency }}</div>
                  </div>
                  <p>{{ product.information }}</p>
                  <div class="ps-stock">
                    Stock:
                    <a href="#">{{ product.stock }}</a>
                  </div>
                  <div class="sep"></div>
                  <div class="space10"></div>
                  <div class="row select-wraps">
                    <div class="col-md-5 col-sm-5">
                      <p>
                        Quantity
                        <span>*</span>
                      </p>
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="space20"></div>
                  <div class="share">
                    <!-- <span>
                      <a href="#" class="fa fa-heart-o"></a>
                      <a href="#" class="fa fa-signal"></a>
                      <a href="#" class="fa fa-envelope-o"></a>
                    </span>
                    <div class="addthis_native_toolbox"></div>-->
                  </div>
                  <div class="space20"></div>
                  <div class="sep"></div>
                  <a class="addtobag" href="#">Add to Bag</a>
                </div>
              </div>
            </div>
            <div class="clearfix space40"></div>
            <div role="tabpanel">
              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                  <a
                    href="#home"
                    aria-controls="home"
                    role="tab"
                    data-toggle="tab"
                  >Product Description</a>
                </li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="home">
                  <p v-html="product.desc">{{ product.desc }}</p>
                </div>
              </div>
            </div>
            <div class="clearfix space40"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix space20"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      promote: {},
      media: {},
      slide: []
    };
  },
  created() {
    this.scrollToTop();
    this.loadData();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    loadData() {
      this.$Progress.start();
      axios
        .get("/frontend/getProductDetail/" + this.$route.params.id)
        .then(res => {
          this.product = res.data;
          this.promote = this.product.promote;

          //   console.log(item);
          this.html = "";
          //   console.log(this.object.); <carousel :data="slide"></carousel>

          var photo = [];
          var html = "";
          for (let i = 0; i < this.product.media.length; i++) {
            photo[i] =
              '<img class="img-fluid" alt="Responsive image" src="' +
              this.product.media[i].path +
              '" />';

            var active = "";
            if (i == 0) {
              active = "active";
            }
          }

          this.slide = photo;
          console.log(this.slide);

          this.$Progress.finish();
        })
        .catch(err => {
          console.error(err);

          this.$Progress.fail();
        });
    }
  }
};
</script>
