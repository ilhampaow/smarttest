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
                <form method="post">

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="BulanLaporanKaryawan">Bulan</label>
                    <div class="col-sm-10">
                      <input
                        type="month"
                        id="BulanLaporanKaryawan"
                        name="bulanLaporan"
                        class="form-control phone-mask"
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
                        placeholder="Jumlah kehadiran karyawan, ex : 139"
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
                        placeholder="Jumlah Tanpa Keterangan, ex : 61"
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
                        placeholder="Jumlah Sakit, ex : 3"
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
                        placeholder="Jumlah Ijin, ex : 0"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="tingkatAbsensi">Tingkat Absensi</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="tingkatAbsensi"
                        name="tingkatAbsensi"
                        class="form-control"
                        disabled
                      />
                    </div>
                  </div>



                  <div class="row justify-content-end">
                    <div class="col-sm-2">
                      <button type="submit" class="btn btn-primary">Send</button>
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