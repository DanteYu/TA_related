package refactor.test;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.chrome.ChromeDriver;
import refactor.pages.LoginPage;
import refactor.data.UserLoginDetails;

public class SimpleLoginTest {

    private ChromeDriver driver;

    @BeforeEach
    public void setUp() {
        driver = new ChromeDriver();
    }

    @AfterEach
    public void tearDown() {
        driver.close();
    }

    @Test
    public void shouldShowErrorIfNoPasswordIsEntered() {
        new LoginPage(driver).open()
        .fillAccount(UserLoginDetails.ONLY_EMAIL)
        .clickLogin()
        .assertIsShowingErrorMessage();
    }

    @Test
    public void shouldShowErrorIfInvalidCredentialsAreEntered () {
        new LoginPage(driver).open()
                .fillAccount(UserLoginDetails.INVALID_USER_DETAILS)
                .clickLogin()
                .assertIsShowingErrorMessageIncorrectDetails();
        }

}
