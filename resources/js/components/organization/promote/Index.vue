<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Promotes</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">Promotes</li>
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
                  <th>Discount</th>
                  <th>Desc</th>
                  <th width="280px">Action</th>
                </tr>
                <tr v-for="item in promote.data" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.discount }}</td>
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
            <pagination :data="promote" @pagination-change-page="getResults"></pagination>
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
            <h5 class="modal-title" v-show="editmode" id="addNewTitle">Update Promote</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updatePromote() : createPromote()">
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
                <label for="discount" class="col-form-label">Discount(%) :</label>
                <input
                  v-model="form.discount"
                  type="text"
                  class="form-control"
                  id="discount"
                  :class="{ 'is-invalid': form.errors.has('discount') }"
                  name="discount"
                />
                <has-error :form="form" field="discount"></has-error>
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
      form: new Form({
        id: "",
        name: "",
        discount: "",
        desc: ""
      }),
      promote: {}
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
    editModal(promote) {
      this.editmode = true;
      this.form.reset();
      $("addNew").modal("show");
      this.form.fill(promote);
    },
    loadData() {
      this.$Progress.start();
      axios
        .get("/api/promotes")
        .then(res => {
          this.promote = res.data;
          this.$Progress.finish();
        })
        .catch(err => {
          this.errors = err.res.data.errors;
          this.$Progress.fail();
        });
    },
    getResults(page = 1) {
      axios.get("api/promotes?page=" + page).then(response => {
        this.category = response.data;
      });
    },
    createPromote() {
      this.$Progress.start();
      this.form
        .post("api/promote")
        .then(res => {
          console.log(res);
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
          console.log(err);
          this.$Progress.fail();
        });
    },
    updatePromote() {
      this.$Progress.start();
      this.form
        .put("api/promote/" + this.form.id)
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
            .delete("api/promote_delete/" + id)
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
