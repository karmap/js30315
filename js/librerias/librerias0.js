console.log('sweet alert');

const boton = document.getElementById('boton')

boton.addEventListener('click', () => {
    // Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Los datos han sido enviados',
    //     showConfirmButton: true,
    //     timer: 3000
    // })

    Toastify({
        text: "Agregaste un producto al carrito",
        duration: 2000,
        position: 'center'
    }).showToast()
})

