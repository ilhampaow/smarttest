<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-4">
        <div class="row">
          <!-- Start Parameter Hero --> 
          <div class="col-md-6">
            <div class="card mb-4 ">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Parameter Hero</h5>
                <small class="text-muted float-end">Company Profile Igmma</small>
              </div>
              <div class="card-body">
                <form>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="header-hero">Header Hero</label>
                    <div class="col-sm-10">
                      <textarea
                        id="header-hero"
                        class="form-control"
                        placeholder="ex: Igmma Corps"
                        aria-label="ex: Igmma Corps"
                      ></textarea>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="description-hero">Deskripsi Hero</label>
                    <div class="col-sm-10">
                      <textarea
                        id="description-hero"
                        class="form-control"
                        placeholder="Masukan deskripsi singkat untuk ditampilkan pada hero"
                        aria-label="Masukan deskripsi singkat untuk ditampilkan pada hero"
                      ></textarea>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="imageHero" class="col-sm-2 col-form-label">Image Hero</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="file" id="imageHero" />
                    </div>
                  </div>

                  <div class="row justify-content-end">
                    <div class="col-sm-4">
                      <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                  </div>

                </form>
              </div>
            </div> 
          </div>
          <!-- / End Parameter Hero --> 
          <!-- Start Parameter About --> 
          <div class="col-md-6">
            <div class="card mb-4">
              <div class="card-header d-flex align-items-center justify-content-between">

              <!-- Start Parameter Hero --> 
                
                <h5 class="mb-0">Parameter About</h5>
                <small class="text-muted float-end">Company Profile Igmma</small>
              </div>
              <div class="card-body">
                <form>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="header-about">Header About</label>
                    <div class="col-sm-10">
                      <textarea
                        id="header-about"
                        class="form-control"
                        placeholder="ex: Igmma Corps"
                        aria-label="ex: Igmma Corps"
                      ></textarea>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="description-about">Deskripsi About</label>
                    <div class="col-sm-10">
                      <textarea
                        id="description-about"
                        class="form-control"
                        placeholder="Masukan deskripsi singkat untuk ditampilkan pada about"
                        aria-label="Masukan deskripsi singkat untuk ditampilkan pada about"
                      ></textarea>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="imageAbout" class="col-sm-2 col-form-label">Image About</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="file" id="imageAbout" />
                    </div>
                  </div>

                  <div class="row justify-content-end">
                    <div class="col-sm-4">
                      <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                  </div>

                </form>
              </div>
            </div> 
          </div>
          <!-- / End Parameter About --> 

        </div>
      </div>
    </div>
  </div>
 
         
</template>

<style scoped>
  .col-form-label{
    font-size: 8px !important;
  }
</style>