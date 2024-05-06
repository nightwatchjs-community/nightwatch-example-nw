describe('Nightwatch NW Demo', function() {
  it('test sample website', async function(browser) {
    browser.assert.titleEquals('Nightwatch + NW');
    const text = await browser.element('#test')
      .getAttribute('innerText');

    browser.assert.equal(text, 'Hello, World!');
  });

  after(browser => browser.end());
});

