import { test, expect } from '@playwright/test';

// Pos_Fun_0001
test('Convert a short daily greeting phrase', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('aayuboovan! kohomadha?');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ආයුබෝවන්! කොහොමද?', { timeout: 30000 });
});

// Pos_Fun_0002
test('Convert a simple imperative command', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('methanata enna.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මෙතනට එන්න.', { timeout: 30000 });
});

// Pos_Fun_0003
test('Past tense negative sentence', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('mama giyee naee.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම ගියේ නෑ.', { timeout: 30000 });
});

// Pos_Fun_0004
test('Compound sentence with conjunction', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('mama kaeevaa eeth thavama badaginiyi.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම කෑවා ඒත් තවම බඩගිනියි.', { timeout: 30000 });
});

// Pos_Fun_0005
test('Complex sentence with sub-clauses', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('oyaa enakota mama gedhara gihin thiyeevi.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔයා එනකොට මම ගෙදර ගිහින් තියේවි.', { timeout: 30000 });
});

// Pos_Fun_0006
test('Future tense with plural form', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('api heta yannemu.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අපි හෙට යන්නෙමු.', { timeout: 30000 });
});

// Pos_Fun_0007
test('Polite request form', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('karuNaakara mata udhav karanna puLuvan dha?');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('කරුණාකර මට උදව් කරන්න පුළුවන් ද?', { timeout: 30000 });
});

// Pos_Fun_0008
test('Repeated words for emphasis', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('thava thava kanna.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('තව තව කන්න.', { timeout: 30000 });
});

// Pos_Fun_0009
test('Handling numbers and currency', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('meeka ru. 500/= k venavaa.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මේක රු. 500/= ක් වෙනවා.', { timeout: 30000 });
});

// Pos_Fun_0010
test('Time and Date formatting', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('raesviima thiyennee 2026-01-30 udhee 10.30 ta.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('රැස්වීම තියෙන්නේ 2026-01-30 උදේ 10.30 ට.', { timeout: 30000 });
});

// Pos_Fun_0011
test('Names of places and common terms', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('mama innee Colombo vala.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම ඉන්නේ Colombo වල.', { timeout: 30000 });
});

// Pos_Fun_0012
test('Informal slang usage', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('adha nam maara fit ekak.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අද නම් මාර fit එකක්.', { timeout: 30000 });
});

// Pos_Fun_0013
test('Mixed technical terms', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('magee phone eka update karanna oona.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මගේ phone එක update කරන්න ඕන.', { timeout: 30000 });
});

// Pos_Fun_0014
test('Measurement units', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('meeka 10kg k barayi.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මේක 10kg ක් බරයි.', { timeout: 30000 });
});

// Pos_Fun_0015
test('Segmented word variations', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('gihillaa ennam.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ගිහිල්ලා එන්නම්.', { timeout: 30000 });
});

// Pos_Fun_0016
test('Mahaprana (Aspirated) consonants', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('Dharma chakraya.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ධර්ම චක්‍රය.', { timeout: 30000 });
});

// Pos_Fun_0017
test('Use of retroflex L (La)', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('loku Lamayek.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ලොකු ළමයෙක්.', { timeout: 30000 });
});

// Pos_Fun_0018
test('Pronoun variations', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('ovun adha ennee naee.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔවුන් අද එන්නේ නෑ.', { timeout: 30000 });
});

// Pos_Fun_0019
test('Multi-word common expression', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('parissamin gihillaa enna.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('පරිස්සමින් ගිහිල්ලා එන්න.', { timeout: 30000 });
});

// Pos_Fun_0020
test('Abbreviations handling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('eyaa Prof. kenek');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('එයා Prof. කෙනෙක්', { timeout: 30000 });
});

// Pos_Fun_0021
test('Long paragraph input', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill(' adha godak rasnee dhavasak. mama hithuvee udheema vaesseyi kiyalaa eeth ehema vuNee naee. dhaen mama kachal ekaka innee mokadha fan eka vaeda karannee naee. karuNaakara meeka hadhalaa dhenna puLuvandha? mata dhaen godak amaaruyi mee rasnee. eeka nisaa ikmanata enna.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText(' අද ගොඩක් රස්නේ දවසක්. මම හිතුවේ උදේම වැස්සෙයි කියලා ඒත් එහෙම වුණේ නෑ. දැන් මම කචල් එකක ඉන්නේ මොකද fan එක වැඩ කරන්නේ නෑ. කරුණාකර මේක හදලා දෙන්න පුළුවන්ද? මට දැන් ගොඩක් අමාරුයි මේ රස්නේ. ඒක නිසා ඉක්මනට එන්න.', { timeout: 30000 });
});

// Pos_Fun_0022
test('Complex sentence with multiple verbs', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('mama kaeema kaalaa, vathura biilaa, nidhaa gaththaa.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම කෑම කාලා, වතුර බීලා, නිදා ගත්තා.', { timeout: 30000 });
});

// Pos_Fun_0023
test('Polite formal phrasing', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('oba thumaata sthuuthiyi.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔබ තුමාට ස්තූතියි.', { timeout: 30000 });
});

// Pos_Fun_0024
test('Interrogative with multiple options', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('oyaata oonaee tea dha naethnam coffee dha?');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔයාට ඕනෑ tea ද නැත්නම් coffee ද?', { timeout: 30000 });
});

// Neg_Fun_0001
test('Excessive whitespace handling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('mama    gedara yanava.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම ගෙදර යනවා.', { timeout: 30000 });
});

// Neg_Fun_0002
test('Mathematical symbol ', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('5 + 5 = 10 neda?');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('5 + 5 = 10 නේද?', { timeout: 30000 });
});

// Neg_Fun_0003
test('Typographical error handling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('mma gdr ynv.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම ගෙදර යනවා.', { timeout: 30000 });
});

// Neg_Fun_0004
test('Mixed English grammar', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('I am eating bath.');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('I am eating බත්.', { timeout: 30000 });
});

// Neg_Fun_0005
test('Ambiguous Mahaprana mapping', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('Kade');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('කඩේ', { timeout: 30000 });
});

// Neg_Fun_0006
test('Word segmentation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('kohomadhainne?');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('කොහොමද ඉන්නේ?', { timeout: 30000 });
});

// Neg_Fun_0007
test('Punctuation at the start of input', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('??? mokaada kiyanue?');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('??? මොකක්ද කියන්නේ?', { timeout: 30000 });
});

// Neg_Fun_0008
test('Emoji and symbol interference', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('kohomadha? 😊');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('කොහොමද? ☺️', { timeout: 30000 });
});

// Neg_Fun_0009
test('Impossible phonetic sequences', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('qqq aaaeeeiii');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('qqq ආඇඉ', { timeout: 30000 });
});

// Neg_Fun_0010
test('Buffer overflow risk - large input handling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Generate a long string (2000 characters) to test buffer limits
    const largeInput = 'a'.repeat(2000);

    // Enter the large Singlish text
    await input.fill(largeInput);
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the application to remain stable and provide a result (not crash)
    // Adjust the expectation based on whether it should be truncated or fully translated
    await expect(output).toBeVisible({ timeout: 30000 });
    
    // Check that the output is not empty or showing a crash state
    const outputText = await output.innerText();
    expect(outputText.length).toBeGreaterThan(0);
});

// Pos_UI_0001
test('Verify real-time output update during active typing', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );

    // Enter Singlish text
    await input.fill('oyaa dhen mokadha karanne?');
    await input.press('Space');

    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();

    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔයා දැන් මොකද කරන්නේ?', { timeout: 30000 });
});