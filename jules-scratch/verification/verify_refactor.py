from playwright.sync_api import sync_playwright, Page, expect

def run_verification(page: Page):
    """
    Verifies that the refactored application pages load correctly.
    """
    # Verify the onboarding page
    page.goto("http://localhost:8000/src/index.html")
    expect(page.get_by_role("heading", name="Welcome to Countify+")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/onboarding_page.png")

    # Verify the main application page
    page.goto("http://localhost:8000/src/main.html")
    expect(page.get_by_role("heading", name="Countify+")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/main_page.png")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    run_verification(page)
    browser.close()

print("Verification script executed successfully.")