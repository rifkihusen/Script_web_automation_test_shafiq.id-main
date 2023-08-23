import login from "../pageobjects/login";

describe("Homepage", () => {
  it("user bisa input valid email dan kata sandi", async () => {
    await login.open();
    await login.field_username.waitForDisplayed({ timeout: 3000 });
    await login.field_username.addValue("rifkihusen9999@gmail.com");
    await login.password.addValue("Husen12345");
    await login.captcha.click();
    await login.masuk.click();
  });
  it("memverifikasi invalid email dan valid kata sandi pada proses login", async () => {
    await login.open();
    await login.field_username.waitForDisplayed({ timeout: 3000 });
    await login.field_username.addValue("salah9999@gmail.com");
    await login.password.addValue("Husen12345");
    await login.captcha.click();
    await login.masuk.click();
  });
  it("memverifikasi valid email dan invalid kata sandi pada proses login", async () => {
    await login.open();
    await login.field_username.waitForDisplayed({ timeout: 3000 });
    await login.field_username.addValue("rifkihusen9999@gmail.com");
    await login.password.addValue("salah12345");
    await login.captcha.click();
    await login.masuk.click();
  });
  it("memverifikasi valid email dan invalid kata sandi pada proses login", async () => {
    await login.open();
    await login.field_username.waitForDisplayed({ timeout: 3000 });
    await login.field_username.addValue("rifkihusen9999@gmail.com");
    await login.password.addValue("salah12");
    await login.captcha.click();
    await login.masuk.click();
  });
  it("Memverifikasi bahwa user tidak dapat login jika field email dikosongkan", async () => {
    await login.open();
    await login.field_username.waitForDisplayed({ timeout: 3000 });
    await login.field_username.addValue("");
    await login.password.addValue("Husen12345");
    await login.captcha.click();
    await login.masuk.click();
  });
  it("memverifikasi valid email dan kata sandi namun tidak mengisi captcha verifikasi human", async () => {
    await login.open();
    await login.field_username.waitForDisplayed({ timeout: 3000 });
    await login.field_username.addValue("rifkihusen9999@gmail.com");
    await login.password.addValue("Husen12345");
    await login.captcha.addValue("");
    await login.masuk.click();
  });
});
