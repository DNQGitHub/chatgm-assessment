describe('E2E Testing', () => {
    const ITEM_NAME = 'Item 1';
    const ITEM_UPDATED_NAME = 'Item 1 - Update';

    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    describe('App Launch', () => {
        it("Should have text Q's TODO", async () => {
            await expect(element(by.text("Q's TODO"))).toBeVisible();
        });
    });

    describe('Add New Todo', () => {
        it("Should have modal 'Add New Todo' visible", async () => {
            await element(by.id('button-add-new-todo')).tap();
            await expect(element(by.text('Add New Todo'))).toBeVisible();
        });

        it("Should have error when input empty to field 'name'", async () => {
            await element(by.id('button-submit-add-new-todo')).tap();
            await expect(element(by.id('input-name-error-message'))).toHaveText('required');
        });

        it("Should have new item with 'name' when submit", async () => {
            await element(by.id('input-name')).typeText(ITEM_NAME);
            await element(by.id('button-submit-add-new-todo')).tap();
            await expect(element(by.text(ITEM_NAME))).toBeVisible();
        });
    });

    describe('Edit Todo', () => {
        it("Should have modal 'Edit Todo' visible", async () => {
            await element(by.id('button-edit-todo')).tap();
            await expect(element(by.text('Edit Todo'))).toBeVisible();
        });

        it("Should have item with 'name' when submit", async () => {
            await element(by.id('input-name')).typeText(ITEM_UPDATED_NAME);
            await element(by.id('button-submit-edit-todo')).tap();
            await expect(element(by.text(ITEM_UPDATED_NAME))).toBeVisible();
        });
    });

    describe('Delete Todo', () => {
        it("Should have modal 'Delete Todo' visible", async () => {
            await element(by.id('button-delete-todo')).tap();
            await expect(element(by.text('Delete Todo'))).toBeVisible();
        });

        it("Should have no item with 'name' when submit", async () => {
            await element(by.id('button-submit-delete-todo')).tap();
            await expect(element(by.text(ITEM_UPDATED_NAME))).toBeVisible();
        });
    });
});
