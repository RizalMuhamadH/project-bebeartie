<template>
  <div>
    <!-- BREADCRUMBS -->
    <div class="bcrumbs">
      <div class="container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>Shopping Cart</li>
        </ul>
      </div>
    </div>

    <div class="space10"></div>

    <!-- MAIN CONTENT -->
    <div class="shop-single shopping-cart">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <table class="cart-table">
              <tr>
                <th>Remove</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Edit</th>
                <th>Quantity</th>
                <th>Promo</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
              </tr>
              <tr v-for="item in listItem" :key="item.id">
                <td>
                  <div style="cursor: pointer;" @click="delItem(item.id)">
                    <i class="edit fa fa-trash"></i>
                  </div>
                </td>
                <td>
                  <img :src="item.product.image_thumb" class="img-responsive" alt />
                </td>
                <td>
                  <h4>{{ item.product.name }}</h4>
                </td>
                <td>
                  <div @click="editShow(item.id, item.quality)" style="cursor: pointer;">
                    <i class="fa fa-edit"></i>
                  </div>
                </td>
                <td v-if="idItem != item.id">{{ item.quality }}</td>
                <td v-else>
                  <form @submit.prevent="updateItem()">
                    <input type="number" v-model="qualityTmp" />
                    <center>
                      <button type="submit" class="btn-black pull-left">Update</button>
                    </center>
                  </form>
                </td>
                <td>{{ item.product.promote.name }} {{ item.product.promote.discount }}% / item</td>
                <td>
                  <div class="item-price">{{ item.product.price | currency }}</div>
                </td>
                <td>
                  <div class="item-price">{{ item.product.price * item.quality | currency }}</div>
                </td>
              </tr>
            </table>
            <div class="table-btn">
              <router-link to="/front" class="btn-black pull-left">Continue Shopping</router-link>
              <!-- <a href="#" class="btn-black pull-right">Update Shopping Cart</a> -->
            </div>
            <div class="clearfix space20"></div>
            <div class="shipping-info-wrap">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="totals">
                  <table id="shopping-cart-totals-table">
                    <tfoot>
                      <tr>
                        <td style class="a-right" colspan="1">
                          <strong>Grand Total</strong>
                        </td>
                        <td style class="a-right">
                          <strong>
                            <span class="price">{{ totalPrice | currency }}</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td style class="a-right" colspan="1">Subtotal</td>
                        <td style class="a-right">
                          <span class="price">{{ subTotal | currency }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ul class="checkout-types">
                    <li class="space10">
                      <button type="button" class="btn-color">Proceed to checkout</button>
                    </li>
                    <li>
                      <a href="#">Checkout with Multiple Addresses</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
      listItem: [],
      totalPrice: 0,
      subTotal: 0,
      idItem: null,
      qualityTmp: 0
    };
  },
  created() {
    this.loadListItemCart();
    Fire.$on("addCart", data => {
      this.loadListItemCart();
    });
  },
  methods: {
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
            this.subTotal = 0;

            for (let i = 0; i < this.listItem.length; i++) {
              let discount =
                this.listItem[i].product.price *
                (this.listItem[i].product.promote.discount / 100);
              let endPrice = this.listItem[i].product.price - discount;
              this.totalPrice += this.listItem[i].quality * endPrice;
              this.subTotal +=
                this.listItem[i].quality * this.listItem[i].product.price;
            }
            // this.$Progress.finish();
            // console.log(res);
          })
          .catch(err => {
            // this.$Progress.fail();
            // console.error(err);
          });
      }
    },
    editShow(id, qty) {
      console.log(id);

      this.idItem = id;
      this.qualityTmp = qty;
    },
    delItem(id) {
      if (localStorage.getItem("bebeartie.jwt") != null) {
        this.$Progress.start();
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("bebeartie.jwt");

        axios
          .delete("api/cart/" + id)
          .then(res => {
            Fire.$emit("addCart", true);
            this.$Progress.finish();
            console.log(res);
          })
          .catch(err => {
            this.$Progress.fail();
            console.error(err);
          });
      } else {
        Fire.$emit("mustLogin", true);
      }
    },
    updateItem() {
      if (localStorage.getItem("bebeartie.jwt") != null) {
        this.$Progress.start();
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("bebeartie.jwt");

        axios
          .put("api/cart/update/" + this.idItem, {
            quality: this.qualityTmp,
            id: this.idItem
          })
          .then(res => {
            Fire.$emit("addCart", true);
            this.$Progress.finish();
            console.log(res);

            this.idItem = null;
          })
          .catch(err => {
            this.$Progress.fail();
            console.error(err);
          });
      } else {
        Fire.$emit("mustLogin", true);
      }
    }
  }
};
</script>
