package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.InvalidSelectorException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        File file = new File("chromedriver.exe");
        System.setProperty("webdriver.chrome.driver", file.toString());
        options.addArguments("--headless");
        options.addArguments("--remote-allow-origins=*");

        WebDriver driver = new ChromeDriver(options);
        try {
//        navigates to the given url
            driver.get("https://weather.gc.ca/canada_e.html");
//        finding elements by tagname()
            List<WebElement> elements = driver.findElements(By.tagName("td"));
            try( FileWriter file2 = new FileWriter("Weather.txt")){
                for (int i = 0; i < elements.size(); i++) {
                    if((elements.get(i).getText().startsWith("Calgary") ||elements.get(i).getText().startsWith("Halifax") || elements.get(i).getText().startsWith("Mon")
                            || elements.get(i).getText().startsWith("Toronto") ||elements.get(i).getText().startsWith("Vancouver"))){
                        String city = elements.get(i).getText();
                        String temp = elements.get(i+2).getText();
                        System.out.println(city);
                        System.out.println(temp);
                        try{
                            file2.write("City: " + city + "\t" + "Weather: " + temp + "\n");
                        } catch(IOException e){
                            System.out.println("Error writing into file" + e.getMessage());
                        }
                    }
                }
            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
        }
        catch (InvalidSelectorException e){
            System.out.println("Error message: " + e.getMessage());
        } finally{
            driver.quit();
        }


    }
}