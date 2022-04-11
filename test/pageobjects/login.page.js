const Page = require('./page')

class LoginPage extends Page{

    get emailField() {return $('#edit-email')}
    get passwordField() {return $('#edit-pass')}
    get loginButton() {return $('#edit-login')}

    login(userEmail, userPassword){
        await this.emailField.setValue(userEmail)
        await this.passwordField.setValue(userPassword)
        await this.loginButton.click()
    }
    
    open(){
        return super.open('login')
    }

}

module.exports = new LoginPage()