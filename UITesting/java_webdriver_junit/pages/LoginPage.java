package refactor.pages;

import refactor.data.UserLoginDetails;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class LoginPage {

    private WebDriver driver;

    @FindBy(id = "email")
    private WebElement emailTextBox;

    @FindBy(id = "password")
    private WebElement passwordTextBox;

    @FindBy(id = "signInButton")
    private WebElement loginButton;

    @FindBy(id = "errors1")
    private WebElement errorMessage;

    public LoginPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public LoginPage open() {
        driver.get("https://www.cleartrip.com/signin");
        return this;
    }

    public LoginPage fillAccount(UserLoginDetails userLoginDetails){
        fillEmail(userLoginDetails.getEmail());
        fillPassword(userLoginDetails.getPassword());
        return this;
    }

    public LoginPage clickLogin(){
        loginButton.click();
        return this;
    }

    public LoginPage assertIsShowingErrorMessage(){
        assertEquals(getText(errorMessage), "There were errors in your submission\n" + "Your account password is a required field");
        return this;
    }

    public LoginPage assertIsShowingErrorMessageIncorrectDetails(){
        assertEquals(getText(errorMessage), "There were errors in your submission\n" + "The username or password you entered is incorrect.");
        return this;
    }

    private void fillEmail(String emailAddress){
        emailTextBox.sendKeys(emailAddress);
    }

    private void fillPassword(String password){
        passwordTextBox.sendKeys(password);
    }

    private String getText(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(element));
        return element.getText();
    }

}
