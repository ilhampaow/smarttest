<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 mt-4">
    <!-- Responsive Table -->
              <div class="card">

                <div class="card-header d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Data Penilaian</h5>
                  <router-link type="button" to="/tambah-data-penilaian" class="btn btn-sm btn-primary"><i class='bx bx-plus me-1' ></i> Tambah Nilai Baru</router-link>
                  <!-- <small class="text-muted float-end">Company Profile Igmma</small> -->
                </div>
                <!-- <h5 class="card-header">Responsive Table</h5> -->
                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr class="text-nowrap">
                        <th>id</th>
                        <th>Nama</th>
                        <th>Kelengkapan Administrasi</th>
                        <th>Tes Fisik</th>
                        <th>Tes Matematika</th>
                        <th>Tes Bahasa</th>
                      </tr>
                    </thead>
                    <tbody v-for="(penilaian, index) in data_penilaian" v-bind:key="(penilaian.id, index)">
                      <tr>
                        <th scope="row">{{penilaian.id}}</th>
                        <td>{{penilaian.nama}}</td>
                        <td>{{penilaian.kelengkapan_administrasi}}</td>  
                        <td>{{penilaian.tes_fisik}}</td>
                        <td>{{penilaian.tes_matematika}}</td>
                        <td>{{penilaian.tes_bahasa}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                              <a href="" type="button" class="btn btn-xs btn-outline-primary" @Click.prevent="delete_penilaian(penilaian.id)" title="Proses"><i class='bx bx-process'></i></a>
                              <router-link type="button" class="btn btn-xs btn-outline-primary" :to="detail_penilaian(penilaian.id)" title="View"><i class='bx bx-detail'></i></router-link>
                              <a href=""  type="button" class="btn btn-xs btn-outline-primary" @Click.prevent="edit_penilaian(penilaian.id)" title="Edit"><i class='bx bx-edit'></i></a>
                              <a href="" type="button" class="btn btn-xs btn-outline-primary" @Click.prevent="delete_penilaian(penilaian.id)" title="Delete"><i class='bx bx-trash'></i></a>
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
        data_penilaian: [],
        errors: {}

      }
    },
    mounted(){
      axios.get('/api/penilaian/').then((response) => {
      console.log(response)
      this.karyawans = response.data.data
      })
    },
    methods: {
      detail_penilaian(id) {
        return '/view-data-penilaian/' + id
      },
      edit_penilaian(id){  
        // return '/edit-data-karyawan/' + id
        this.$router.push({
          name: 'editdataPenilaian',
          params:{
            id: id
          }
        })
      },
      delete_penilaian(id){
        this.$confirm("Apakah Anda Yakin Ingin Menghapus Data Nilai?","",'question').then(() => {
          axios.delete('/api/penilaian/' + id ).then((response) => {
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
