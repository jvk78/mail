const form = document.getElementById('form');
form.addEventListener('submit', formsend);

async function formsend(e) {
  e.preventDefault()
  let error = formValidate(form)

  let formData = new FormData(form)
  formData.append('image', formImage.files[0])

  console.log(response)


  if (error === 0) {
form.classList.add('_sending')
    let response = await fetch('sendmail.php', {
      metod: 'POST',
      body: formData
    })

    if (response.ok) {
      let result = await response.json()
      console.log(result.message);
      formPreview.innerHTML = '';
      form.reset();
form.classList.remove('_sending')
      
    } else {
      console.log('Error')
form.classList.remove('_sending')
    }

  } else {
    console.log('Wrong field!')
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll('._req');
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index]
    formRemoveError(input);
    
    if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        formAddError(input);
        error++
      }
    } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++
    } else {
      if (input.value === '') {
        formAddError(input);
        error++
      }
    }
  }
//  console.log(error)
  return error
}

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}
function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', () => {
  uploadFile(formImage.files[0]);
})

function uploadFile(file) {
  if (!['image/jpg', 'image/png', 'image/gif'].includes(file.type)){
    console.log('Wrong format')
    formImage.value = '';
    return
  }
  if (file.size > 2 * 1024 * 1024){
    console.log('Wrong size');
    return
  }

let reader = new FileReader();

reader.onload = function (e) {
    console.log(formPreview);
  
  formPreview.innerHTML = `<img src="${e.target.result}" alt="img">`
};

reader.onerror = function (e) {
    console.log('error');
  
}
reader.readAsDataURL(file)
}











































