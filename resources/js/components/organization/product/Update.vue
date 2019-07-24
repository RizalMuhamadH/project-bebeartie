<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Products</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">Products</li>
              <li class="breadcrumb-item active">Update</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="box box-info">
        <div class="card card-primary card-outline">
          <div class="card-body">
            <form @submit.prevent="updateProduct()">
              <div class="form-group">
                <label for="name" class="col-form-label">Name :</label>
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  id="name"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                  name="name"
                />
                <has-error :form="form" field="name"></has-error>
              </div>

              <div class="form-group">
                <label for="price" class="col-form-label">Price(Rp.) :</label>
                <input
                  v-model="form.price"
                  type="text"
                  class="form-control"
                  id="price"
                  :class="{ 'is-invalid': form.errors.has('price') }"
                  name="price"
                />
                <has-error :form="form" field="price"></has-error>
              </div>

              <div class="form-group">
                <label for="stock" class="col-form-label">Stock :</label>
                <input
                  v-model="form.stock"
                  type="text"
                  class="form-control"
                  id="stock"
                  :class="{ 'is-invalid': form.errors.has('stock') }"
                  name="stock"
                />
                <has-error :form="form" field="stock"></has-error>
              </div>

              <div class="form-group">
                <label for="weight" class="col-form-label">Weight :</label>
                <input
                  v-model="form.weight"
                  type="text"
                  class="form-control"
                  id="weight"
                  :class="{ 'is-invalid': form.errors.has('weight') }"
                  name="weight"
                />
                <has-error :form="form" field="weight"></has-error>
              </div>

              <div class="form-group">
                <label for="category_id" class="col-form-label">Category :</label>
                <select
                  v-model="form.category_id"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('category_id') }"
                >
                  <option
                    v-for="options in categories"
                    :value="options.id"
                    :key="options.id"
                  >{{ options.name }}</option>
                </select>
                <has-error :form="form" field="category_id"></has-error>
              </div>

              <div class="form-group">
                <label for="promote_id" class="col-form-label">Promo :</label>
                <select
                  v-model="form.promote_id"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('promote_id') }"
                >
                  <option
                    v-for="options in promotes"
                    :value="options.id"
                    :key="options.id"
                  >{{ options.name }}</option>
                </select>
                <has-error :form="form" field="promote_id"></has-error>
              </div>

              <div class="form-group">
                <label for="status" class="col-form-label">Status :</label>
                <select
                  v-model="form.status"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('status') }"
                >
                  <option value="Y">On Sale</option>
                  <option value="T">Sold</option>
                </select>
                <has-error :form="form" field="status"></has-error>
              </div>

              <div class="form-group">
                <label for="image_thumb" class="col-form-label">Cover Image :</label>
                <input
                  type="file"
                  @change="coverImage"
                  class="form-control"
                  id="image_thumb"
                  :class="{ 'is-invalid': form.errors.has('image_thumb') }"
                  name="image_thumb"
                />
                <has-error :form="form" field="image_thumb"></has-error>
              </div>

              <div class="form-group">
                <label for="photo" class="col-form-label">Multiple Photo :</label>
                <input
                  type="file"
                  @change="listPhoto"
                  multiple
                  class="form-control"
                  id="photo"
                  :class="{ 'is-invalid': form.errors.has('photo') }"
                  name="photo"
                />
                <has-error :form="form" field="photo"></has-error>
              </div>

              <div class="form-group">
                <label for="desc" class="col-form-label">Description :</label>
                <Tinymce
                  v-model="form.desc"
                  id="desc"
                  :class="{ 'is-invalid': form.errors.has('desc') }"
                  name="desc"
                ></Tinymce>
                <has-error :form="form" field="desc"></has-error>
              </div>

              <div class="form-group">
                <label for="message-text" class="col-form-label">Information:</label>
                <textarea
                  v-model="form.information"
                  class="form-control"
                  id="information"
                  :class="{ 'is-invalid': form.errors.has('information') }"
                  name="information"
                ></textarea>
                <has-error :form="form" field="information"></has-error>
              </div>

              <button type="submit" class="btn btn-primary">Save</button>
              <router-link to="/products" class="btn btn-outline-info">Back</router-link>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
      promotes: [],
      product: {},
      form: new Form({
        id: "",
        name: "",
        price: "",
        stock: "",
        status: "",
        desc: "",
        information: "",
        image_thumb: "",
        photo: [],
        weight: "",
        category_id: "",
        promote_id: ""
      })
    };
  },
  created() {
    this.loadData();
    this.getDetail();
  },
  methods: {
    coverImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      let limit = 1024 * 1024 * 2;
      if (file["size"] > limit) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "You are uploading a large file"
        });
        return false;
      }
      reader.onloadend = file => {
        this.form.image_thumb = reader.result;
      };
      reader.readAsDataURL(file);
    },
    listPhoto(e) {
      for (let i = 0; i < e.target.files.length; i++) {
        let file = e.target.files[i];
        let reader = new FileReader();
        let limit = 1024 * 1024 * 2;
        if (file["size"] > limit) {
          Swal.fire({
            type: "error",
            title: "Oops...",
            text: "You are uploading a large file"
          });
          return false;
        }
        reader.onloadend = file => {
          this.form.photo[i] = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updateProduct() {
      this.$Progress.start();
      this.form
        .put("api/product/" + this.product.id)
        .then(res => {
          this.$Progress.finish();
          Toast.fire({
            type: "success",
            title: "Successfully"
          });
          this.$router.go(-1);
        })
        .catch(err => {
          this.$Progress.fail();
          Swal.fire("Failed!", "There was something wrong.", "warning");
          console.log(err);
        });
    },
    loadData() {
      axios
        .get("api/other")
        .then(res => {
          //   console.log(res);
          this.categories = res.data.categories;
          this.promotes = res.data.promotes;

          //   console.log(this.categories);
        })
        .catch(err => {
          //   console.error(err);
        });
    },
    getDetail() {
      this.$Progress.start();
      this.form
        .get(`api/product/${this.$route.params.id}/edit`)
        .then(res => {
          this.product = res.data;
          this.form.fill(this.product);
          this.$Progress.finish();
          console.log(res);
        })
        .catch(err => {
          this.$Progress.fail();
          Swal.fire("Failed!", "There was something wrong.", "warning");
          console.log(err);
        });
    }
  }
};
</script>
