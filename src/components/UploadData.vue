<template>
  <div class="upload-data">
    <div class="upload-box"
         v-bind:class="{dragging: dragging}"
         onclick="document.getElementById('file-input').click()"
         @dragover="dragging=true"
         @dragleave="dragging=false"
         @drop.prevent="readDroppedFile"
         @dragover.prevent
    >
      <div class="plus">+</div>
      <div>Drop your data exported from Letterboxd here (.zip file)</div>
    </div>

    <input id="file-input" type="file" name="name" style="display: none;"
           @change="readPickedFile"/>

    <div v-if="inputError" class="error"> Invalid file!</div>
    <div class="letterboxd-hint">Go to
      <a target="_blank" href="https://letterboxd.com/settings/data/">Letterboxd</a>
      to
      export your
      data
    </div>


  </div>
</template>


<script>

  import Papa from 'papaparse'

  export default {
    name: "UploadData",
    data: () => ({
      dragging: false,
      inputError: false
    }),
    methods: {
      readDroppedFile(e) {
        this.dragging = false;
        this.processInput(e.dataTransfer.files);
      },

      readPickedFile(e) {
        this.processInput(e.target.files);
      },
      getEntries: (file) => {
        zip.createReader(new zip.BlobReader(file), zipReader => {
          zipReader.getEntries((entries) => {
            if (entries.length) {
              entries.forEach(entry => {
                entry.getData(new zip.TextWriter(), text => {
                  console.log(entry.filename);
                  console.log(Papa.parse(text, {
                    header: true,
                    skipEmptyLines: true
                  }));
                  zipReader.close(() => {});
                })
              });
            }

          });
        }, onerror);
      },
      processInput(files) {
        if (!files) return;
        let file = files[0];
        this.inputError = !file.name.endsWith(".zip");
        let fileList = [];
        this.getEntries(file);
      }
    },
  }
</script>

<style lang="less">
  @import "../less/less-variables";

  .upload-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: auto;
    padding: 20px;
  }

  .upload-box {
    cursor: pointer;
    margin: auto auto;
    width: fit-content;
    color: @text-light;
    border: dashed 2px @text-light;
    padding: 20px;

    &.dragging {
      border: dashed 4px skyblue;
    }

    &:hover {
      background-color: black;
    }
  }

  .plus {
    font-size: 3rem;
    font-weight: bolder;
  }

  .letterboxd-hint {
    padding: 20px;

    a {
      color: white;
      text-decoration: underline;
    }
  }

  .error {
    padding: 5px;
    color: red;
  }
</style>
