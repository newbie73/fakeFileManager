const f = ['file1.txt', 'file2.txt', 'file3.txt']

function loadFiles(files, callback){
    let i = 0
    let res = []
    function loading(){
        if(i < files.length){
            setTimeout(() => {
                console.log("load: " + files[i])
                readFile(files[i], function getCallRes(content){
                    res.push(content)
                })
                console.log('reading: ' + files[i])
                i++
                loading()
            }, 2000)
            
        }
        if(i === files.length){
            callback(res)
        }
    }
    loading()
}

function readFile(file, callback){
    setTimeout(() => {
        callback('Content of ' + file)
    }, 1000)
}

loadFiles(f, (results) => {
    console.log(results)
})