# Variable Income Calculator
## A Web Application for Estimating Future Income
#### Alex Riley
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ## What It Is/What It Does
- It is a 1-page web application that allows the user to estimate their future income by making calculations based on past income. It's designed for those who make
    hourly wages, do freelance work, do odd jobs, etc. and may not receive the exact same paycheck every time.
- First, the user selects a radio button for how often they get paid (weekly, bi-weekly, monthly). The calculations are based on this value and the entered paycheck
    amounts. Once a radio button is selected, a message is displayed under "Information Entered", which shows how often the user gets paid.
- Next the user enters as many recent paycheck amounts as they want. The more paycheck amounts added the better, as it will result in a more accurate estimate because
  it provides more numbers to go off of. After each paycheck amount, the user clicks "Add" and the paycheck amounts are displayed in a list under "Information Entered".
- Once the user is finished entering paycheck amounts, they click "Calculate" and the calculations are displayed under "Calculations". It includes:
  - Average paycheck
  - Daily wages
  - Weekly wages
  - Bi-weekly wages
  - Monthly wages
  - Annual wages
  - Highest and lowest of the paychecks entered
- The user may click a new radio button at any time to change the pay frequency. Clicking "Calculate" again will recalculate all values using the new pay frequency.
- The numbers provided under the "Calculations" section are not definitive amounts for the user's future paychecks and should not be treated as such. Rather, the numbers
  there are based on averages calculated using the entered paycheck amounts and the pay frequency.
- The purpose of this is to:
  - Provide a bigger picture estimate of the user's future income based on their income thus far to allow the user to make more responsible financial choices based on
    this estimate
  - Save time for the user, as they can make these calculations much faster using this application than they could with a calculator, paper, and pencil
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Languages and Tools Used
### Languages
- HTML
- CSS
- JavaScript
### Tools
- Visual Studio Code
  - Development environment
- Git
  - Version control
- GitHub
  - Repository
- GitHub Pages
  - Hosting
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## The Development Process
### Initial Setup
- I created the GitHub repository and then cloned it in VS Code
- I used GitHub pages to host the web application so that it can be accessed via my personal website
### Design
- I began by saving some stock photos of currency and ultimately chose an image of dollar bills and coins with a calculator on a tabletop. I made this my background,
  with a semi-transparent top-to-bottom dark green to beige linear gradient over it.
- The background for the parent div elements includes a dollar bill pattern with a semi-transparent green radial gradient on top. The child div elements have transparent backgrounds
- and semi-transparent pale green borders.
- The buttons are dark green with off-white text. I went for a lot of green on this web application, since it deals with money. 
### Development
- I started by creating HTML, CSS, and JavaScript files. I only needed one of each for this project.
- The HTML handles the layout of the page, the CSS handles the other features such as fonts, colors, etc., and the JavaScript handles the saving of user input to an
  array, displaying the user input, and making calculations.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Future Changes
-  I may add a feature that helps the user create a budget based on their calculations
-  I'll be adding media queries to better optimize the application for smaller screens 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Credits
#### Alex Riley
- Designed and developed the application
