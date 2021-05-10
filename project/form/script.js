    // case 'text':
    //     regExp = /^([a-zа-я])$/i;
    //     break;
    // case 'phone-number':
    //     regExp = /^(\+[7]\(\d{3}\)\d{3}\-\d{4})$/;
    //     break;
    // case 'email':
    //     regExp = /^([\w\.\-])@([a-z]).([a-z]{2,4})$/i;
    //     break;

    let btn = document.querySelector('input[type="submit"]');
    let form = document.querySelector('form');

    form.addEventListener('submit', function () {
        console.log('валидация');
    })