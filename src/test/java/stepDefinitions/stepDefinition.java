package stepDefinitions;

import org.junit.runner.RunWith;

import Cucumber.Automation.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class stepDefinition extends Base{
	
	   @Given("^validate the browser$")
	    public void validate_the_browser() throws Throwable {
		   System.out.println("validate the browse");
	    }

	    @When("^Browser is triggered$")
	    public void browser_is_triggered() throws Throwable {
	    	System.out.println(" Browser is triggered");
	    }

	    @Then("^Check if browser is started$")
	    public void check_if_browser_is_started() throws Throwable {
	    	System.out.println("Check if browser is started");
	    }
	    
	@Given("^User is on NetBanking landing page$")
    public void user_is_on_netbanking_landing_page() throws Throwable {
         //
		System.out.println(" user is on netbanking");
    }
	
	 @When("^User login into Application with (.+) and password (.+)$")
	    public void user_login_into_application_with_and_password(String username, String password) throws Throwable {
		 System.out.println(username);
		 System.out.println(password);
	    }
	 
	  @When("^User login into Application with \"([^\"]*)\" and \"([^\"]*)\"$")
	    public void user_login_into_application_with_something_and_something(String strArg1, String strArg2) throws Throwable {
		  System.out.println(strArg1);
		  System.out.println(strArg2);
	    }
    

//    @Then("^Home Page is populated$")
//    public void home_page_is_populated() throws Throwable {
//         //
//    	System.out.println("home page is populated");
//    }

    @And("^Cards displayed \"([^\"]*)\"$")
    public void cards_displayed_something(String strArg1) throws Throwable {
        System.out.println(strArg1);
    }

}
