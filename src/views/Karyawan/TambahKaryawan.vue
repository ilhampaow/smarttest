<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-4">
        <div class="row">
          <!-- Start Parameter Hero --> 
          <div class="col-xxl">
            <div class="card mb-4 ">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Tambah Data Karyawan</h5>
                <small class="text-muted float-end">Igmma Corp</small>
              </div>
              <div class="card-body">
                <form method="post">

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="namaLengkap">Nama Lengkap</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="namaLengkap"
                        name="namaLengkap"
                        placeholder="ex : Aceng Arif Qudsi"
                        class="form-control phone-mask"
                      />
                    </div>
                  </div>
                  
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="tempatLahir">Tempat Lahir</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="tempatLahir"
                        name="tempatLahir"
                        placeholder="ex : Bandung"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="tanggalLahir">Tanggal Lahir</label>
                    <div class="col-sm-10">
                      <input
                        type="date"
                        id="tanggalLahir"
                        name="tanggalLahir"
                        placeholder=""
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="alamatLengkap">Alamat Lengkap</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" name="alamatLengkap" id="alamatLengkap" cols="30" rows="5" placeholder="Alamat lengkap..."></textarea>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="Jabatan">Jabatan</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="Jabatan"
                        name="Jabatan"
                        placeholder="ex : CEO"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="noTelp">No Telepon</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="noTelp"
                        name="noTelp"
                        placeholder="ex : +6288449330716"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="Email">Email</label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="Email"
                        name="Email"
                        placeholder="ex : example@gmail.com"
                        class="form-control"
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