function switchLanguage(langCode) {
  var currentUrl = window.location.href;
  if (langCode === 'sk') {
    window.location.href = currentUrl.replace('/en/home.html', '/domov.html')
                                       .replace('/en/registration.html', '/registracia.html')
                                       .replace('/en/login.html', '/prihlasenie.html');
  } else if (langCode === 'en') {
    window.location.href = currentUrl.replace('/domov.html', '/en/home.html')
                                       .replace('/registracia.html', '/en/registration.html')
                                       .replace('/prihlasenie.html', '/en/login.html');
  }
}
