const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#miEmail')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:hector.pascual.marin@gmail.com?subject= ${form.get('name')} - Enviado desde portafolios &body=${form.get('message')}`)
      $buttonMailto.click()
    };