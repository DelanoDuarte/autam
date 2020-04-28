class Util {

    static mapRequestFilesToArray(files) {
        let files_array = []
        const file_keys = Object.keys(files)

        file_keys.forEach(key => {
            files_array.push(files[key])
        })

        return files_array
    }
}

module.exports = {
    Util
}