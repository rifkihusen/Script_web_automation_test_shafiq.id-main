class Home {
  async open() {
    // web yg ingin di test
    await browser.url("https://www.shafiq.id/login");
  }
  get field_username() {
    // cari id nya dulu diweb
    return $('//*[@placeholder="email@anda.com"]');
  }
  get password() {
    // cari id nya dulu diweb
    return $('//*[@placeholder="Masukkan kata sandi"]');
  }
  get captcha() {
    return $('//*[@role="presentation"]');
  }
  get masuk() {
    return $('//*[@type="submit"]');
  }
}

export default new Home();
