<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 mt-4">
    <!-- Responsive Table -->
              <div class="card">

                <div class="card-header d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Data Peserta</h5>
                  <router-link type="button" to="/tambah-data-peserta" class="btn btn-sm btn-primary"><i class='bx bx-plus me-1' ></i> Tambah Baru</router-link>
                  <!-- <small class="text-muted float-end">Company Profile Igmma</small> -->
                </div>
                <!-- <h5 class="card-header">Responsive Table</h5> -->
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr class="text-nowrap">
                        <th>id</th>
                        <th>Nama</th>
                        <th>Tempat Tanggal Lahir</th>
                        <th>Alamat</th>
                        <th>Jenis Kelamin</th>
                        <th>NO HP</th>
                        <th>Pendidikan</th>
                        <th>No KTP</th>
                      </tr>
                    </thead>
                    <tbody v-for="(peserta, index) in data_peserta" v-bind:key="(peserta.id, index)">
                      <tr>
                        <th scope="row">{{peserta.id}}</th>
                        <td>{{peserta.nama}}</td>
                        <td>{{peserta.ttl}}</td>  
                        <td>{{peserta.alamat}}</td>
                        <td>{{peserta.jenis_kelamin}}</td>
                        <td>{{peserta.nomor}}</td>
                        <td>{{peserta.pendidikan}}</td>
                        <td>{{peserta.no_ktp}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                              <router-link type="button" class="btn btn-xs btn-outline-primary" :to="detail_peserta(peserta.id)" title="View"><i class='bx bx-detail'></i></router-link>

                              <a href=""  type="button" class="btn btn-xs btn-outline-primary" @Click.prevent="edit_peserta(peserta.id)" title="Edit"><i class='bx bx-edit'></i></a>

                              <a href="" type="button" class="btn btn-xs btn-outline-primary" @Click.prevent="delete_peserta(peserta.id)" title="Delete"><i class='bx bx-trash'></i></a>
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
<script>
import axios from 'axios'
  export default {
    data(){
      return {
        karyawans: [],
        errors: {}

      }
    },
    mounted(){
      axios.get('/api/peserta/').then((response) => {
      console.log(response)
      this.karyawans = response.data.data
      })
    },
    methods: {
      detail_peserta(id) {
        return '/view-data-peserta/' + id
      },
      edit_peserta(id){  
        // return '/edit-data-karyawan/' + id
        this.$router.push({
          name: 'editdataPeserta',
          params:{
            id: id
          }
        })
      },
      delete_peserta(id){
        this.$confirm("Apakah Anda Yakin Ingin Menghapus Data Peserta?","",'question').then(() => {
          axios.delete('/api/peserta/' + id ).then((response) => {
                if(response.status){
                  
                  this.$moshaToast(response.data.message, {
                      showIcon: true,
                      type: 'success',
                      hideProgressBar: true,
                      position: 'top-right',
                      transition: 'bounce',
                      setTimeout: 8000
                  })
                  this.$router.go()
                }
              }).catch((error) =>{
                if(error.response.status){
                  console.log(error)
                  this.errors = error.response.data
                  this.$moshaToast(error.message,{
                    showIcon: true,
                    type: 'danger',
                    hideProgressBar: true,
                    position: 'top-right',
                    transition: 'bounce',
                    setTimeout: 8000
                  })
                }
              })
              
        });
        
      }
    }
  }
</script>
