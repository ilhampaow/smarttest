<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 mt-4">
    <!-- Responsive Table -->
              <div class="card">


                <div class="card-header d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Karyawan Igmma Corp</h5>
                  <router-link type="button" to="/tambah-data-karyawan" class="btn btn-sm btn-primary"><i class='bx bx-plus me-1' ></i> Tambah Baru</router-link>
                  <!-- <small class="text-muted float-end">Company Profile Igmma</small> -->
                </div>
                

                <!-- <h5 class="card-header">Responsive Table</h5> -->
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr class="text-nowrap">
                        <th>No</th>
                        <th>Nama</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Alamat</th>
                        <th>NO HP</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button" class="btn btn-xs btn-outline-primary" title="View"><i class='bx bx-detail'></i></button>
                              <router-link  type="button" class="btn btn-xs btn-outline-primary" to="/edit-data-karyawan" title="Edit"><i class='bx bx-edit'></i></router-link>
                              <button type="button" class="btn btn-xs btn-outline-primary" title="Delete"><i class='bx bxs-trash'></i></button>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                          <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button" class="btn btn-xs btn-outline-primary" title="View"><i class='bx bx-detail'></i></button>
                              <router-link  type="button" class="btn btn-xs btn-outline-primary" to="/edit-data-karyawan" title="Edit"><i class='bx bx-edit'></i></router-link>
                              <button type="button" class="btn btn-xs btn-outline-primary" title="Delete"><i class='bx bxs-trash'></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Table cell</td> 
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                          <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button" class="btn btn-xs btn-outline-primary" title="View"><i class='bx bx-detail'></i></button>
                              <router-link  type="button" class="btn btn-xs btn-outline-primary" to="/edit-data-karyawan" title="Edit"><i class='bx bx-edit'></i></router-link>
                              <button type="button" class="btn btn-xs btn-outline-primary" title="Delete"><i class='bx bxs-trash'></i></button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!--/ Responsive Table -->
    </div>
  </div>
</div>
</template>