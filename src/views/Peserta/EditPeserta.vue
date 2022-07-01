<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-4">
        <div class="row">
          <!-- Start Parameter Hero --> 
          <div class="col-xxl">
            <div class="card mb-4 ">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Edit Data Peserta</h5>
              </div>
              <div class="card-body">
                <form @submit.prevent="handleUpdate" method="post">
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="namaLengkap">Nama Lengkap</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="namaLengkap"
                        name="namaLengkap"
                        placeholder="Nama Lengkap"
                        class="form-control phone-mask"
                        v-model="dataPeserta.nama"
                      >
                      <div class="error" v-if="errors.nama">
                        {{errors.nama[0]}}
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="tempattanggalLahir">Tempat Tanggal Lahir</label>
                    <div class="col-sm-10">
                      <input
                        type="option"
                        id="tempattanggalLahir"
                        name="tempattanggalLahir"
                        placeholder="ex: Tempat, Tanggal Lahir"
                        class="form-control"
                        v-model="dataPeserta.ttl"
                      >
                      <div class="error" v-if="errors.ttl">
                        {{errors.ttl[0]}}
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="alamat">Alamat Lengkap</label>
                    <div class="col-sm-10">
                      <textarea 
                        class="form-control" 
                        name="alamat" 
                        id="alamat" 
                        cols="30" rows="5" 
                        placeholder="alamat"
                        v-model="dataPeserta.alamat"
                      >
                      </textarea>
                      <div class="error" v-if="errors.alamat">
                        {{errors.alamat[0]}}
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="Jenis Kelamin">Jenis Kelamin</label>
                    <div class="col-sm-10">
                      <input type="radio" id="L" value="L" v-model="dataPeserta.jenis_kelamin" />
                      <label style="margin-left: 5px" for="L">Laki-Laki</label>
                      <input style="margin-left: 30px" type="radio" id="P" value="P" v-model="dataPeserta.jenis_kelamin" />
                      <label style="margin-left: 5px" for="P">Perempuan</label>
                      <div class="error" v-if="errors.jenis_kelamin">
                        {{errors.jenis_kelamin[0]}}
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="noTelp">Nomor Telepon</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="noTelp"
                        name="noTelp"
                        placeholder="No Telepon"
                        class="form-control"
                        v-model="dataPeserta.nomor"
                      >
                      <div class="error" v-if="errors.nomor">
                        {{errors.nomor[0]}}
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="pendidikan">Pendidikan</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="pendidikan"
                        name="pendidikan"
                        placeholder="pendidikan"
                        class="form-control"
                        v-model="dataKaryawan.pendidikan"
                      >
                      <div class="error" v-if="errors.pendidikan">
                        {{errors.pendidikan[0]}}
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="nomorktp">Nomor KTP</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="nomorktp"
                        name="nomorktp"
                        placeholder="nomorktp"
                        class="form-control"
                        v-model="dataPeserta.nomor_ktp"
                      >
                      <div class="error" v-if="errors.nomor_ktp">
                        {{errors.nomor_ktp[0]}}
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-end">
                    <div class="col-sm-2">
                      <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                  </div>
                  

                </form>
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
        dataKaryawan: {
          nama: '',
          ttl: '',
          jenis_kelamin: '',
          agama: '',
          alamat: '',
          nomor: '',
          pendidikan_terakhir: '',
          status_perkawinan: '',
          tanggungan: '',
          divisi: '',
          mulai_bekerja: ''
        },
        errors: {}
      }
    },
    mounted(){
      this.getKaryawan()
    },
    methods:{
      getKaryawan(){
        axios.get('/api/karyawan/' + this.id).then((response) => {
          console.log(response);
          this.dataKaryawan = {
            nama: response.data.karyawan.nama,
            ttl: response.data.karyawan.ttl,
            jenis_kelamin: response.data.karyawan.jenis_kelamin,
            agama: response.data.karyawan.agama,
            alamat: response.data.karyawan.alamat,
            nomor: response.data.karyawan.nomor,
            pendidikan_terakhir: response.data.karyawan.pendidikan_terakhir,
            status_perkawinan: response.data.karyawan.status_perkawinan,
            tanggungan: response.data.karyawan.tanggungan,
            divisi: response.data.karyawan.divisi,
            mulai_bekerja: response.data.karyawan.mulai_bekerja
          } 
        }
      )},
      handleUpdate(){
        console.log(this.dataKaryawan)
        
        axios.put('/api/karyawan/' + this.id, this.dataKaryawan).then((response) => {
          console.log(response.status)
          if(response.status == 201){
            console.log(response)
            this.$moshaToast(response.data.message,{
              showIcon: true,
              type: 'success',
              hideProgressBar: true,
              position: 'top-right',
              transition: 'bounce'
            })
            this.$router.push({
              name: 'viewdataKaryawan',
              params:{
                id: this.id
              }
            })
          }          
        }).catch((error) =>{
          console.log(error)
          if(error.response.status){
            console.log(error)
            this.errors = error.response.data
            this.$moshaToast(error.message,{
              showIcon: true,
              type: 'danger',
              hideProgressBar: true,
              position: 'top-right',
              transition: 'bounce'
            })
          }
        })
      }
    }
  }
</script>


<style scoped>
</style>