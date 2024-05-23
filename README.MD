
Preliminary step(s):
- Install HomeBrew (MacOS users only)
- Install NodeJS
- Install PHP 8.2.0+ (to the default directory per your operating system, other directories WILL break php's functionality)
- Install Microsoft ODBC driver for SQL Server
  - Windows: https://learn.microsoft.com/en-us/sql/connect/php/download-drivers-php-sql-server?view=sql-server-ver16
  - Linux/MacOS: https://learn.microsoft.com/en-us/sql/connect/php/installation-tutorial-linux-mac?view=sql-server-ver16


# Setup Steps
1. Clone repository
2. Enter repo directory then /src/ directory
3. Run ```npm start```
4. Given errors, install all missing dependencies e.g. ```npm install @full-dependency-name/slashes/and/at/symbols/included```
5. Go back a directory and enter directory /PHP/ 
6. Run ```php -S localhost:8000``` (If you know which of your ports are occupied, change port as needed)
7. React should be running by default on port 3000
8. Visit localhost:3000 in browser
