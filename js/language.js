function switchLanguage(langCode) {
  var currentUrl = window.location.href;
  if (langCode === 'sk') {
    window.location.href = currentUrl.replace('/en/home.html', '/domov.html')
                                       .replace('/en/registration.html', '/registracia.html')
                                       .replace('/en/login.html', '/prihlasenie.html')
                                       .replace('/en/pedagogue.html', '/system/pedagog.html')
                                       .replace('/en/student.html', '/system/student.html')
                                       .replace('/en/password.html', '/heslo.html')
                                       .replace('/en/overview.html', '/system/prehlad.html')
                                       .replace('/en/assignments.html', '/system/zadania.html');
  } else if (langCode === 'en') {
    window.location.href = currentUrl.replace('/domov.html', '/en/home.html')
                                       .replace('/registracia.html', '/en/registration.html')
                                       .replace('/prihlasenie.html', '/en/login.html')
                                       .replace('/system/pedagog.html', '/en/pedagogue.html')
                                       .replace('/system/student.html', '/en/student.html')
                                       .replace('/heslo.html', '/en/password.html')
                                       .replace('/system/prehlad.html', '/en/overview.html')
                                       .replace('/system/zadania.html', '/en/assignments.html');
  }
}
