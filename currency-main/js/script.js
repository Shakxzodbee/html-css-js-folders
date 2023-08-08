'use strict'

const uzs = document.querySelector('#usz');
const usd = document.querySelector('#usd');


uzs.addEventListener('input', (e) => {
    const request = new XMLHttpRequest()

    request.open('GET', '/current.json')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    request.send()

    // the first method


    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState == 4 && request.status == 200) {
    //         const data = JSON.parse(request.response)
    //         usd.value = (+uzs.value / data.current.usd).toFixed(2)
    //     }else{
    //         usd.value = 'Somthing went wrong'
    //     }
    // })

    // the second method

    request.addEventListener('load', () => {
        if (request.status == 200) {
            const data = JSON.parse(request.response)
            usd.value = (+uzs.value / data.current.usd).toFixed(2)
        }else{
            usd.value = 'Somthing went wrong'
        }
    })



    // status qaytaradi 200 - okey ,
    // 404 - not-fount ,
    // 500-server error,
    // 400-client error,

    //status text   https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // response  javob qaytarish
    //readyState    
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState


    //{Value}	  {State}                  {Description}

    // 0	       UNSENT          	        Client has been created. open() not called yet.

    // 1   	       OPENED	                open() has been called.

    // 2	       HEADERS_RECEIVED	        send() has been called, and headers and status are available.

    // 3	       LOADING	                Downloading; responseText holds partial data.

    // 4	       DONE	                    The operation is complete.

})


window.addEventListener('focus' , function(){
    this.document.title = 'Currency';
})
window.addEventListener('blur' , function(){
    this.document.title = 'Currency page is on this page'
})