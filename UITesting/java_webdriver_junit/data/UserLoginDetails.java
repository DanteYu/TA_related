package refactor.data;


public class UserLoginDetails {
    public static UserLoginDetails INVALID_USER_DETAILS =
            new UserLoginDetails("invalid.user@gmail.com", "invalid-password");

    public static UserLoginDetails ONLY_EMAIL =
            new UserLoginDetails("pranathisep91@gmail.com", "");

    private String emailAddress;
    private String password;

    public UserLoginDetails(String emailAddress, String password) {
        this.emailAddress = emailAddress;
        this.password = password;
    }

    public String getEmail() {
        return emailAddress;
    }

    public String getPassword() {
        return password;
    }

}

