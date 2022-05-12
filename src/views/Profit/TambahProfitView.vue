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
                      />
                    </div>
                  </div>
                  
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="jmlProfit">Jumlah Profit</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="jmlProfit"
                        name="jmlProfit"
                        placeholder="Jumlah Profit, ex : Rp 2.416.000"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="jmlKaryawan">Jml Karyawan</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="jmlKaryawan"
                        name="jmlKaryawan"
                        placeholder="Jumlah Karyawan, ex : 15"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="profitKaryawan">Profit Per-Karyawan</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="profitKaryawan"
                        name="profitKaryawan"
                        value=""
                        disabled
                        placeholder="hitung by system"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="presentaseProfit">Presentase</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="presentaseProfit"
                        name="presentaseProfit"
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