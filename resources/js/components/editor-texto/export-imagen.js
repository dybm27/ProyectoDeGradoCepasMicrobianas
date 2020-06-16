export default  class MyUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then(uploadedFile => {
            return new Promise((resolve, reject) => {
                const data = new FormData();
                data.append("upload", uploadedFile);

                axios
                    .post("/publicidad/upload", data, {
                        headers: { "Content-Type": "multipart/form-data" }
                    })
                    .then(res => {
                        if (res.data.uploaded) {
                            resolve({
                                default: res.data.url
                            });
                        } else {
                            reject(res.data.message);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        });
    }

    abort() {
        console.log('errrrrorrr');
    }
}
