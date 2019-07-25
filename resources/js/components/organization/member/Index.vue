<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Members</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">Members</li>
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
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Postcode</th>
                  <th>Phone</th>
                  <th width="280px">Action</th>
                </tr>
                <tr v-for="item in member.data" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.gender }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.city }}</td>
                  <td>{{ item.postcode }}</td>
                  <td>{{ item.phone }}</td>
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
            <pagination :data="member" @pagination-change-page="getResults"></pagination>
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
          <form @submit.prevent="editmode ? updateMember() : createMember()">
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
                <label for="email" class="col-form-label">Email :</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  id="email"
                  :class="{ 'is-invalid': form.errors.has('email') }"
                  name="email"
                />
                <has-error :form="form" field="email"></has-error>
              </div>

              <div class="form-group">
                <label for="password" class="col-form-label">Password :</label>
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  id="password"
                  :class="{ 'is-invalid': form.errors.has('password') }"
                  name="password"
                />
                <has-error :form="form" field="password"></has-error>
              </div>

              <div class="form-group">
                <label for="gender" class="col-form-label">Gender :</label>
                <select
                  v-model="form.gender"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('gender') }"
                >
                  <option value="L">Men</option>
                  <option value="P">Women</option>
                </select>
                <has-error :form="form" field="gender"></has-error>
              </div>

              <div class="form-group">
                <label for="message-text" class="col-form-label">Address:</label>
                <textarea
                  v-model="form.address"
                  class="form-control"
                  id="address"
                  :class="{ 'is-invalid': form.errors.has('address') }"
                  name="address"
                ></textarea>
              </div>

              <div class="form-group">
                <label for="city" class="col-form-label">City :</label>
                <input
                  v-model="form.city"
                  type="text"
                  class="form-control"
                  id="city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  name="city"
                />
                <has-error :form="form" field="city"></has-error>
              </div>

              <div class="form-group">
                <label for="postcode" class="col-form-label">Postcode :</label>
                <input
                  v-model="form.postcode"
                  type="text"
                  class="form-control"
                  id="postcode"
                  :class="{ 'is-invalid': form.errors.has('postcode') }"
                  name="postcode"
                />
                <has-error :form="form" field="postcode"></has-error>
              </div>

              <div class="form-group">
                <label for="phone" class="col-form-label">Phone :</label>
                <input
                  v-model="form.phone"
                  type="text"
                  class="form-control"
                  id="phone"
                  :class="{ 'is-invalid': form.errors.has('phone') }"
                  name="phone"
                />
                <has-error :form="form" field="phone"></has-error>
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
        email: "",
        password: "",
        gender: "",
        address: "",
        city: "",
        postcode: "",
        phone: "",
      }),
      member: {}
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
      this.form.password = "";
    },
    loadData() {
      this.$Progress.start();
      axios
        .get("/api/members")
        .then(res => {
          this.member = res.data;
          this.$Progress.finish();
        })
        .catch(err => {
          this.errors = err.res.data.errors;
          this.$Progress.fail();
        });
    },
    getResults(page = 1) {
      axios.get("api/members?page=" + page).then(response => {
        this.member = response.data;
      });
    },
    createMember() {
      this.$Progress.start();
      this.form
        .post("api/member")
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
    updateMember() {
      this.$Progress.start();
      this.form
        .put("api/member/" + this.form.id)
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
            console.log(err);
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
            .delete("api/member_delete/" + id)
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
