<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Posts</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">post</li>
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
              <button
                data-toggle="modal"
                data-target="#addNew"
                class="btn btn-success"
                @click="newModal()"
              >Add New</button>
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
                  <th>Desc</th>
                  <th width="280px">Action</th>
                </tr>
                <tr v-for="item in category.data" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.desc }}</td>
                  <td>
                    <center>
                      <a
                        class="btn btn-primary"
                        href="#"
                        data-toggle="modal"
                        data-target="#addNew"
                        @click="editModal(item)"
                      >Edit</a>
                      <button
                        class="btn btn-danger delete"
                        style="margin-left:20px;"
                        @click="del(item.id)"
                      >Delete</button>
                    </center>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div class="card-footer">
            <pagination :data="category" @pagination-change-page="getResults"></pagination>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      class="modal fade"
      id="addNew"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-show="!editmode" id="addNewTitle">Add New</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewTitle">Update Category</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateCategory() : createCategory()">
            <div class="modal-body">
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
                <label for="message-text" class="col-form-label">Description:</label>
                <textarea
                  v-model="form.desc"
                  class="form-control"
                  id="desc"
                  :class="{ 'is-invalid': form.errors.has('desc') }"
                  name="desc"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editmode" class="btn btn-primary">Add</button>
              <button type="submit" v-show="editmode" class="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editmode: false,
      category: {},
      errors: {},
      form: new Form({
        id: "",
        name: "",
        desc: ""
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
    newModal() {
      this.editmode = false;
      this.form.reset();
      $("addNew").modal("show");
    },
    editModal(category) {
      this.editmode = true;
      this.form.reset();
      $("addNew").modal("show");
      this.form.fill(category);
    },
    loadData() {
      this.$Progress.start();
      axios
        .get("/api/categories")
        .then(res => {
          this.category = res.data;
          this.$Progress.finish();
        })
        .catch(err => {
          this.errors = err.res.data.errors;
          this.$Progress.fail();
        });
    },
    getResults(page = 1) {
      axios.get("api/categories?page=" + page).then(response => {
        this.category = response.data;
      });
    },
    createCategory() {
      this.$Progress.start();
      this.form
        .post("api/category")
        .then(res => {
          $("#addNew").modal("hide");
          $(".modal-backdrop").remove();

          Fire.$emit("AfterCreate");

          this.$Progress.finish();

          Toast.fire({
            type: "success",
            title: "Successfully"
          });
        })
        .catch(err => {
          this.$Progress.fail();
        });
    },
    updateCategory() {
      this.$Progress.start();
      this.form
        .put("api/category/" + this.form.id)
        .then(res => {
          $("#addNew").modal("hide");
          $(".modal-backdrop").remove();

          Fire.$emit("AfterCreate");

          this.$Progress.finish();

          Toast.fire({
            type: "success",
            title: "Successfully"
          });
        })
        .catch(err => {
          this.$Progress.fail();
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
            .delete("api/category_delete/" + id)
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
