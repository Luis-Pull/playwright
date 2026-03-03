import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://luis.localhost:5173/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('luis@pull.srl');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('#app a').filter({ hasText: /^Receiving$/ }).click();
  await page.getByRole('button', { name: 'Simplified receiving Receive' }).click();
  await page.getByRole('textbox', { name: 'Select a vendor' }).click();
  await page.getByText('Health for Life').click();
  await page.getByRole('textbox', { name: 'Vendor product ID' }).click();
  await page.getByRole('textbox', { name: 'Vendor product ID' }).fill('sdfadf');
  await page.getByRole('textbox', { name: 'Select strain' }).click();
  await page.getByText('Acapulco Gold').click();
  await page.getByRole('textbox', { name: 'Select brand' }).click();
  await page.getByText('Seed & Strain').click();
  await page.getByRole('textbox', { name: 'Select item type' }).click();
  await page.locator('div').filter({ hasText: /^DryWt$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Select location' }).click();
  await page.locator('div').filter({ hasText: /^Harvest Room$/ }).nth(1).click();
  await page.getByText('Trimming Station').click();
  await page.locator('[id="8"]').click();
  await page.locator('[id="8"]').fill('1000');
  await page.locator('[id="9"]').click();
  await page.locator('[id="9"]').fill('1000');
  await page.locator('button[name="save-button"]').click();
  await page.locator('#app a').filter({ hasText: /^Inventory$/ }).click();
  const firstInventoryRow = page.locator('.ag-center-cols-container .ag-row').first();
  const firstInventoryCheckbox = page
    .locator('.ag-pinned-left-cols-container .ag-selection-checkbox input.ag-checkbox-input')
    .first();
  await firstInventoryCheckbox.check();
  await firstInventoryRow.click({
    button: 'right'
  });
  await page.locator('#popover-main').getByText('Move out of quarantine', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Note' }).click();
  await page.getByRole('textbox', { name: 'Note' }).fill('sadf');
  await page.locator('button[name="save-button"]').click();
  await page.getByRole('button', { name: 'Lab actions' }).click();
  await page.locator('#popover-main').getByText('Extract').click();
  await page.getByRole('textbox', { name: 'Select method' }).click();
  await page.locator('div').filter({ hasText: /^Hydrocarbon$/ }).nth(1).click();
  await page.getByRole('checkbox', { name: 'Press Space to toggle row' }).check();
  await page.getByRole('textbox', { name: 'Qty' }).click();
  await page.getByRole('textbox', { name: 'Qty' }).dblclick();
  await page.getByRole('textbox', { name: 'Qty' }).fill('500');
  await page.getByRole('button', { name: 'Add waste' }).click();
  await page.getByRole('textbox', { name: 'Waste' }).click();
  await page.getByRole('textbox', { name: 'Waste' }).fill('10');
  await page.getByRole('textbox', { name: 'Select reason' }).click();
  await page.getByText('Spillage During Processing').click();
  await page.locator('#Next').click();
  await page.locator('.flex.items-center.justify-center.rounded-md').click();
  await page.getByLabel('', { exact: true }).check();
  await page.getByRole('row', { name: 'crude' }).locator('#checkbox').check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Qty' }).click();
  await page.getByRole('textbox', { name: 'Qty' }).fill('480');
  await page.getByRole('textbox', { name: 'Select location' }).click();
  await page.getByText('Laboratory Room B').click();
  await page.getByText('Laboratory LR A1').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Skip printing' }).click();
});
