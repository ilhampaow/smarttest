<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-4">
        <div class="row">
          <!-- Start Parameter Hero --> 
          <div class="col-xxl">
            <div class="card mb-4 ">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Tambah Kepuasan User</h5>
                <small class="text-muted float-end">Igmma Corp</small>
              </div>
              <div class="card-body">
                <form method="post">

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="bulanCareerPath">Bulan</label>
                    <div class="col-sm-10">
                      <input
                        type="month"
                        id="bulanCareerPath"
                        name="bulanCareerPath"
                        class="form-control"
                      />
                    </div>
                  </div>
                 
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="jmlTarget">Jumlah Target</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="jmlTarget"
                        name="jmlTarget"
                        placeholder="ex : 5"
                        class="form-control"
                      />
                    </div>
                  </div>

                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="indeksKepuasan">Indeks Kepuasan</label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        id="indeksKepuasan"
                        name="indeksKepuasan"
                        placeholder="ex : 2"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="presentaseKepuasan">Presentase</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="presentaseKepuasan"
                        name="presentaseKepuasan"
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