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
              <li class="breadcrumb-item active">Products</li>
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
          <div class="card-header">
            <div class="pull-right">
              <router-link to="/products/create" class="btn btn-success">Add New</router-link>
            </div>
          </div>
          <div class="card-body">
            <!-- @if ($message = Session::get('success'))
            <div class="alert alert-success">
              <p>{{ $message }}</p>
            </div>
            @endif-->
            <table class="table table-bordered table-striped" id="mytable">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Promote</th>
                  <th>Weight</th>
                  <!-- <th>Desc</th> -->
                  <th width="280px">Action</th>
                </tr>
                <tr v-for="item in product.data" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.stock }}</td>
                  <td>{{ item.status }}</td>
                  <td>
                    <center>
                      <img :src="item.image_thumb" style="width:100px;height:100px;" />
                    </center>
                  </td>
                  <td>{{ item.category.name }}</td>
                  <td>{{ item.promote.name }}</td>
                  <td>{{ item.weight }}</td>
                  <!-- <td v-html="item.desc">{{ item.desc }}</td> -->
                  <td>
                    <center>
                      <router-link :to="'products/'+item.id+'/edit'" class="btn btn-primary" >Edit</router-link>
                      <button
                        class="btn btn-danger delete"
                        style="margin-left:20px;"
                        @click="del(item.id)"
                      >Delete</button>
                      <button
                        class="btn btn-info"
                        style="margin-left:20px;"
                      >View</button>
                    </center>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div class="card-footer">
            <pagination :data="product" @pagination-change-page="getResults"></pagination>
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
        weight: "",
        category_id: "",
        promote_id: ""
      })
    };
  },
  created() {
    this.loadData();
    Fire.$on("AfterCreate", () => {
      this.loadData();
    });
  },
  methods: {
    loadData() {
      this.$Progress.start();
      axios
        .get("/api/products")
        .then(res => {
          this.product = res.data;
          this.$Progress.finish();
        })
        .catch(err => {
          this.errors = err.res.data.errors;
          this.$Progress.fail();
        });
    },
    getResults(page = 1) {
      axios.get("api/products?page=" + page).then(response => {
        this.product = response.data;
      });
    },
    del(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$Progress.start();
          this.form
            .delete("api/product_delete/" + id)
            .then(res => {
              this.$Progress.finish();
              Fire.$emit("AfterCreate");
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            })
            .catch(err => {
              this.$Progress.fail();
              console.log(err);
              Swal.fire("Failed!", "There was something wrong.", "warning");
            });
        }
      });
    }
  }
};
</script>
