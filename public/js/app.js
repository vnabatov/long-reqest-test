function upload () {
  const data = new window.FormData()
  const request = new window.XMLHttpRequest()
  Array(100).join(',').split(',').forEach((value, key) => {
    data.append('file' + key, document.querySelector('#upload-file').files[0])
  })
  request.addEventListener('load', function (e) {
    console.log(request.response)
  })
  request.upload.addEventListener('progress', function (e) {
    console.log((e.loaded / e.total) * 100)
  })
  request.responseType = 'json'
  request.open('post', '/upload')
  console.log('RequestStarted', new Date())
  request.send(data)
}
