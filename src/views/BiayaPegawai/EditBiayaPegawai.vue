<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-4">
        <div class="row">
          <!-- Start Parameter Hero --> 
          <div class="col-xxl">
            <div class="card mb-4 ">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Tambah Profit</h5>
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
                        value="2022-01"
                        disabled
                      />
                    </div>
                  </div>
                  
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="biayaPegawai">Biaya Pegawai</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="biayaPegawai"
                        name="biayaPegawai"
                        value="2416000"
                        placeholder="Jumlah Biaya Pegawai, ex : Rp 2.416.000"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="biayaOperasional">Biaya Operasional</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="biayaOperasional"
                        name="biayaOperasional"
                        value="15000000"
                        placeholder="Biaya Operasionak, ex : Rp 15.000.000"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="presentaseBiayaPegawai">Presentase</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="presentaseBiayaPegawai"
                        name="presentaseBiayaPegawai"
                        value=""
                        placeholder="hitung by system"
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