<template>
    <div class="container">
        <div class="row">
        <div class="col-md-12 mt-4">
            <div class="row">
            <!-- Start Parameter Hero --> 
            <div class="col-xxl">
                <div class="card mb-4 ">
                    <div class="card-header d-flex align-items-center justify-content-between">
                    <h5 class="mb-0">View Data Karyawan</h5>
                    <small class="text-muted float-end">Igmma Corp</small>
                    </div>
                    <div class="col-lg-12 mb-4 order-0 d-flex">
                        <div class="card-body">
                            <div class="text-center text-sm-left">
                                <div class="pb-0 px-0 px-md-4">
                                    <img
                                        src="../../assets/assets/img/illustrations/man-with-laptop-light.png"
                                        height="140"
                                        alt="View Badge User"
                                        data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                        data-app-light-img="illustrations/man-with-laptop-light.png"
                                    />
                                </div>
                            </div>
                            <div class="mt-4" style="margin-left: 50px;margin-right: 50px">
                                <table class="table-view-karyawan">
                                    <tbody>
                                        <tr>
                                            <th>Nama Lengkap</th>
                                            <td>{{detailkaryawan.nama}}</td>
                                        </tr>
                                        <tr>
                                            <th>Tempat Tanggal Lahir</th>
                                            <td>{{detailkaryawan.ttl}}</td>
                                        </tr>
                                        <tr>
                                            <th>Jenis Kelamin</th>
                                            <td>{{detailkaryawan.jenis_kelamin}}</td>
                                        </tr>
                                        <tr>
                                            <th>Agama</th>
                                            <td>{{detailkaryawan.agama}}</td>
                                        </tr>
                                        <tr>
                                            <th>Alamat Lengkap</th>
                                            <td>{{detailkaryawan.alamat}}</td>
                                        </tr>
                                        <tr>
                                            <th>Nomor Telepon</th>
                                            <td>{{detailkaryawan.nomor}}</td>
                                        </tr>
                                        <tr>
                                            <th>Pendidikan Terakhir</th>
                                            <td>{{detailkaryawan.pendidikan_terakhir}}</td>
                                        </tr>
                                        <tr>
                                            <th>Status Perkawinan</th>
                                            <td>{{detailkaryawan.status_perkawinan}}</td>
                                        </tr>
                                        <tr>
                                            <th>Tanggungan</th>
                                            <td>{{detailkaryawan.tanggungan}}</td>
                                        </tr>
                                        <tr>
                                            <th>Divisi</th>
                                            <td>{{detailkaryawan.divisi}}</td>
                                        </tr>
                                        <tr>
                                            <th>Mulai Bekerja</th>
                                            <td>{{detailkaryawan.mulai_bekerja}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <!-- / End Parameter Hero --> 

            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
      props: ['id'],
      data(){
          return {
              detailkaryawan: []
          }
      },
      mounted(){
          this.getKaryawan()
      },
      methods: {
          getKaryawan(){
              axios.get('/api/karyawan/' + this.id).then((response) => {
                  console.log(response);
                  this.detailkaryawan = response.data.karyawan
              }
            )}
      }
  }
</script>


<style scoped>
</style>