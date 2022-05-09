<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-4">
        <div class="row">
          <!-- Start Parameter Hero --> 
          <div class="col-xxl">
            <div class="card mb-4 ">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Tingkat Absensi Karyawan</h5>
                <small class="text-muted float-end">Igmma Corp</small>
              </div>
              <div class="card-body">
                <form>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="BulanLaporanKaryawan">Bulan</label>
                    <div class="col-sm-10">
                      <input
                        type="month"
                        id="BulanLaporanKaryawan"
                        name="bulanLaporan"
                        class="form-control"
                        value="2022-09"
                      />
                    </div>
                  </div>
                  
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="jmlKehadiran">jml Kehadiran</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="jmlKehadiran"
                        name="jmlKehadiran"
                        value="139"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="tanpaKeterangan">TP Keterangan</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="tanpaKeterangan"
                        name="tanpaKeterangan"
                        value="61"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="jmlSakit">jml Sakit</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="jmlSakit"
                        name="jmlSakit"
                        value="3"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="jmlIjin">jml Ijin</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="jmlIjin"
                        name="jmlIjin"
                        value="0"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="tingkatAbsensi">Tingkat Absensi</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="tingkatAbsensi"
                        name="tingkatAbsensi"
                        value="48,00%"
                        class="form-control"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="row justify-content-end">
                    <div class="col-sm-3 ">
                      <button type="submit" class="btn btn-primary ms-1">Send</button>
                      <router-link  type="submit" class="btn btn-outline-secondary ms-1" to="/absensi-karyawan">Cancel</router-link>
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

<style scoped>
</style>