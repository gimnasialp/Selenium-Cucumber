package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features=	"src/test/java/features",
				glue="stepDefinitions",
						monochrome=true,
						strict=true,
					//	dryRun=true
				//stepNotifications=true
				//tags="@RegTest or/and @SmokeTest",
				//tags= "not @SanityTest")
				//,tags= "@MobileTest,@WebTest",
				tags= "@SeleniumTest1",
				plugin= {"pretty","html:target/cucumber",
							"json:target/cucumber.json",
							"junit:target/cukes.xml"})
public class TestRunner {

}
