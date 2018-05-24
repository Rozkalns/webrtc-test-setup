const { By, Key, until } = require('selenium-webdriver')
const { suite } = require('selenium-webdriver/testing')
const firefox = require('selenium-webdriver/firefox')

suite(function (env) {
  describe('Video Chat: Joining the room', function () {
    let driver

    before(async function () {
      let options = new firefox.Options()
        .setPreference('media.navigator.streams.fake', true)
        .setPreference('media.navigator.permission.disabled', true)

      driver = await env.builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build()
    })

    after(() => driver.quit())

    it('Joins the room and sees the video', async function () {
      await driver.get('https://testdevlab-hangwith-test.herokuapp.com/room/testroom')

      let q = await driver.findElement(By.css('input[name="name"]'))
      await q.sendKeys('Name Surname', Key.RETURN)
      await driver.wait(
        until.elementLocated(By.css('.person__video video')), 5000
      ).then(() => {
        console.log('Video element seen')
      })
    })
  })
})
