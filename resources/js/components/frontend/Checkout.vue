<template>
  <div>
    <!-- BREADCRUMBS -->
    <div class="bcrumbs">
      <div class="container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>Checkout</li>
        </ul>
      </div>
    </div>

    <div class="space10"></div>

    <!-- MAIN CONTENT -->
    <div class="shop-single">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-8">
            <!-- HTML -->
            <div>
              <h4 class="account-title">
                <span class="fa fa-chevron-right"></span>Checkout Method
              </h4>
              <div class="account-form">
                <form id="shipping-zip-form">
                  <ul class="form-list row">
                    <li class="col-md-6 col-sm-6">
                      <label>
                        First Name
                        <em>*</em>
                      </label>
                      <input type="text" class="input-text" required />
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>
                        Last Name
                        <em>*</em>
                      </label>
                      <input type="text" class="input-text" required />
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>
                        Address 1
                        <em>*</em>
                      </label>
                      <input required type="text" class="input-text" />
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>Address 2</label>
                      <input type="text" class="input-text" />
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>Company Name</label>
                      <input type="text" class="input-text" />
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>Province</label>
                      <select v-model="selectedProvince" required>
                        <option
                          v-for="option in province"
                          :key="option.province_id"
                          :value="option.province_id"
                        >{{ option.province }}</option>
                      </select>
                    </li>
                    <li class="clearfix"></li>
                    <li class="col-md-6 col-sm-6">
                      <label>City</label>
                      <select v-model="selectedCity" required>
                        <option
                          v-for="item in city"
                          :key="item.city_id"
                          :value="item.city_id"
                        >{{ item.type }} {{ item.city_name }}</option>
                      </select>
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>
                        Zip/Postal Code
                        <em>*</em>
                      </label>
                      <input required type="text" class="input-text" />
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>
                        Email
                        <em>*</em>
                      </label>
                      <input required type="text" class="input-text" />
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>
                        Phone Number
                        <em>*</em>
                      </label>
                      <input required type="text" class="input-text" />
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>
                        Courier
                        <em>*</em>
                      </label>
                      <select v-model="courier" required>
                        <option value="jne">JNE</option>
                        <option value="pos">POS Indonesia</option>
                        <option value="tiki">TiKi</option>
                      </select>
                    </li>
                    <li class="col-md-6 col-sm-6">
                      <label>
                        Cost
                        <em>*</em>
                      </label>
                      <select v-model="selectedCost" required>
                        <option
                          v-for="item in service.costs"
                          :key="item.cost[0].etd"
                          :value="item.cost[0].value"
                        >{{ item.service }}</option>
                      </select>
                    </li>
                    <li class="col-md-12 col-sm-12">
                      <table class="cart-table">
                        <tbody></tbody>
                        <tfoot>
                          <tr>
                            <th>Cart Subtotal</th>
                            <td>
                              <div class>$ 99.00</div>
                            </td>
                          </tr>
                          <tr>
                            <th>Shipping and Handling</th>
                            <td>
                              <div class>{{ selectedCost | currency }}</div>
                            </td>
                          </tr>
                          <tr>
                            <th>Order Total</th>
                            <td>
                              <div class>$ 99.00</div>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </li>
                    <li class="col-md-12 col-sm-12 transfer-wrap">
                      <p>
                        <input
                          id="direct-transfer"
                          type="radio"
                          name="optradio"
                          class="input-chkbox"
                        />
                        <label>Direct Bank Transfer</label>
                      </p>
                      <div id="direct-transfer-msg" class="transfer-guide">
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                      </div>
                      <p>
                        <input
                          id="cheque-transfer"
                          type="radio"
                          name="optradio"
                          class="input-chkbox"
                        />
                        <label>Cheque Payment</label>
                      </p>
                      <div id="cheque-transfer-msg" class="transfer-guide">
                        <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                      </div>
                      <p>
                        <input
                          id="paypal-transfer"
                          type="radio"
                          name="optradio"
                          class="input-chkbox"
                        />
                        <label class="pay-pal">
                          PayPal
                          <img
                            alt="PayPal Acceptance Mark"
                            src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
                          />
                          <a
                            title="What is PayPal?"
                            onclick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup', 'WIPaypal', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700');
                                                                return false;"
                            class="about_paypal"
                            href="https://www.paypal.com/gb/webapps/mpp/paypal-popup"
                          >What is PayPal?</a>
                        </label>
                      </p>
                      <div id="paypal-transfer-msg" class="transfer-guide">
                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                      </div>
                    </li>
                  </ul>
                  <div class="buttons-set">
                    <button class="btn-black" type="submit">Place Order</button>
                  </div>
                </form>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-4">
            <div class="side-widget space50">
              <h3>
                <span>Your order</span>
              </h3>
              <div>
                <table class="cart-table">
                  <tbody></tbody>
                  <tr>
                    <td>
                      <div class="item-img col-md-5 col-sm-5">
                        <a href="#">
                          <img src="images/products/fashion/5.jpg" class="img-responsive" alt />
                        </a>
                      </div>
                      <div class="item-info col-md-7 col-sm-7">
                        <h4>Product fashion</h4>
                        <p>x2</p>
                        <p>Size: M</p>
                      </div>
                    </td>
                    <td>
                      <a href="#">
                        <i class="fa fa-trash-o"></i>
                      </a>
                    </td>
                  </tr>
                  <tfoot>
                    <tr>
                      <th>Cart Subtotal</th>
                      <td>
                        <div class>$ 99.00</div>
                      </td>
                    </tr>
                    <tr>
                      <th>Shipping and Handling</th>
                      <td>
                        <div class>Free Shipping</div>
                      </td>
                    </tr>
                    <tr>
                      <th>Order Total</th>
                      <td>
                        <div class>$ 99.00</div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      selectedProvince: 0,
      selectedCity: 0,
      courier: null,
      selectedCost: 0
    };
  },
  created() {
    this.getProvince();
  },
  computed: {
    ...mapGetters("shipping", {
      province: "province",
      city: "city",
      service: "service"
    })
  },
  watch: {
    selectedProvince(newValue, oldValue) {
      this.getCity(newValue);
    },
    selectedCity(newValue, oldValue) {
      if (this.courier != null) {
        this.getCost({ destination: this.selectedCity, courier: this.courier });
      }
    },
    courier(newValue, oldValue) {
      if (this.selectedCity != 0) {
        this.getCost({ destination: this.selectedCity, courier: this.courier });
      }
    }
  },
  methods: {
    ...mapActions("shipping", {
      getProvince: "getProvince",
      getCity: "getCity",
      getCost: "getCost"
    })
  }
};
</script>
