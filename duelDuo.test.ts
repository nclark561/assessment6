
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays 5 robots to choose from', async () => {
    await driver.findElement(By.id('draw')).click()
    let choices = await driver.findElements(By.className('bot-btn'))
    expect(choices.length).toBe(5)
    await driver.sleep(2000)
})

test('check to make sure add to duo adds the robot to the players duo', async () => {
    await driver.findElement(By.id('draw')).click()
    let addBtn = await driver.findElements(By.className('bot-btn'))
    console.log(addBtn.length)
    await addBtn[0].click()
    let removeBtn = await driver.findElement(By.xpath('//button[text()="Remove from Duo"]'))
    expect(removeBtn.isDisplayed).toBeTruthy()
    await driver.sleep(2000)
})